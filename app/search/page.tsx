import React from 'react'
import Link from 'next/link'
import parseRSSFeed from '../rss'
import { members } from '../members'
import { PostItem } from '../types'
import Card from '../components/card'
import { fetchAllPostItems } from '../utils'

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | undefined }
}) {
  let allSearchPostItems: Array<any> = []

  const q = searchParams.q
  const tag = searchParams.tag

  const { allPostItems, allTagItems } = await fetchAllPostItems(members)

  allPostItems.sort(
    (a: { pubDate: string }, b: { pubDate: string }) =>
      new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  )
  const limitedItems = allPostItems.slice(0, 3)

  if (tag) {
    allSearchPostItems = allPostItems.filter((item: PostItem) =>
      item.categories?.includes(tag)
    )
  }

  if (q) {
    allSearchPostItems = allPostItems.filter((item: PostItem) =>
      item.title.includes(q)
    )
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <img
                src="/logo_01.webp"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Engineer
              </span>
            </Link>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <form action="search" method="get">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative w-96 mr-10">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                    name="q"
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="https://hab-co.jp/company/"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    target="_blank"
                    rel="noopener"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://hab-co.jp/contact/"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    target="_blank"
                    rel="noopener"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-5">
        <div className="flex justify-between w-full max-w-7xl flex-wrap gap-5">
          {limitedItems.map((post: PostItem) => (
            <Card post={post} key={post.guid}></Card>
          ))}
        </div>
        <div className="max-w-7xl w-full mt-20">
          <h3 className="text-3xl font-bold dark:text-white">Members</h3>
          <div className="flex mt-6 gap-5">
            {members.map((member, index: number) => (
              <a href={member.websiteUrl} key={index}>
                <img
                  className="w-20 h-20 rounded rounded-full"
                  src={member.avatarSrc}
                  alt={member.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl w-full mt-20">
          <h3 className="text-3xl font-bold dark:text-white">Tags</h3>
          <div className="mt-5 flex flex-wrap">
            {allTagItems.map((item: string, index: number) => (
              <Link href={`search/?tag=${item}`} key={index}>
                <span
                  className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  key={index}
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-7xl flex-wrap mt-20 gap-16">
          {allSearchPostItems.map((post: PostItem) => (
            <Card post={post} key={post.guid}></Card>
          ))}
        </div>
      </main>
      <Link
        href="https://www.wantedly.com/companies/hab-co/projects"
        className="md:p-4 p-2 shadow-sm bg-purple-500 md:w-32 md:h-32 w-20 h-20 rounded-full flex main-bg-color fixed md:bottom-8 md:right-8 right-4 bottom-4 text-white items-center hover:opacity-75 ease-in duration-200 text-center"
        target="_blank"
        rel="noopener"
      >
        <span className="md:block hidden">エンジニアの採用はこちら</span>
        <span className="md:hidden block text-xs">エンジニア採用</span>
      </Link>
    </>
  )
}
