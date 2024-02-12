import React from 'react'
import parseRSSFeed from './rss'
import { members } from './members'
import Card from './components/card'

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let allPostItems: any = []
  let allTagItems: any = []

  const q = searchParams.q
  const tag = searchParams.tag

  for (const member of members) {
    const feedItems: any = member.sources
    for (const feedItem of feedItems) {
      const items = await parseRSSFeed(feedItem)
      for (const item of items) {
        item.avatarSrc = member.avatarSrc
        item.name = member.name
        item.categories?.map((category: any) => {
          if (!allTagItems.includes(category)) {
            allTagItems.push(category)
          }
        })
        console.log(allTagItems)
      }
      if (items) allPostItems = [...allPostItems, ...items]
    }
  }

  allPostItems.sort(
    (a: any, b: any) =>
      new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  )
  const limitedItems = allPostItems.slice(0, 3)

  if (tag) {
    allPostItems = allPostItems.filter((item: any) =>
      item.categories?.includes(tag)
    )
  }

  if (q) {
    allPostItems = allPostItems.filter((item: any) => item.title.includes(q))
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src="/logo_01.webp"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Engineer
              </span>
            </a>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://hab-co.jp/company/"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    target="_blank"
                    rel="noopener"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="/members"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Members
                  </a>
                </li>
                <li>
                  <a
                    href="https://hab-co.jp/contact/"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    target="_blank"
                    rel="noopener"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-between w-full max-w-7xl flex-wrap">
          {limitedItems.map((post: any) => (
            <Card post={post} key={post.guid}></Card>
          ))}
        </div>
        <div className="w-full max-w-7xl w-full mt-20">
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
        <div className="w-full max-w-7xl w-full mt-20">
          <form action="" method="get">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
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
          <div className="mt-5">
            {allTagItems.map((item: any, index: number) => (
              <a href={`?tag=${item}`} key={index}>
                <span
                  className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  key={index}
                >
                  {item}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full max-w-7xl flex-wrap mt-20 gap-10">
          {allPostItems.map((post: any) => (
            <Card post={post} key={post.guid}></Card>
          ))}
        </div>
      </main>
      <a
        href="https://www.wantedly.com/companies/hab-co/projects"
        className="p-4 shadow-sm bg-purple-500 w-32 h-32 rounded-full flex main-bg-color fixed bottom-8 right-8 text-white flex items-center hover:opacity-75 ease-in duration-200"
        target="_blank"
        rel="noopener"
      >
        エンジニアの採用はこちら
      </a>
    </>
  )
}
