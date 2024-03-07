import React from 'react'
import Link from 'next/link'
import parseRSSFeed from '../rss'
import { members } from '../members'
import { PostItem } from '../types'
import Card from '../components/card'
import { fetchAllPostItems } from '../utils'
import Header from '../components/header'

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
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-5 bg-stone-800">
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
