import React from 'react'
import { fetchAllPostItems } from './utils'
import { members } from './members'
import Card from './components/card'
import { PostItem } from './types'
import Link from 'next/link'
import Header from './components/header'

export default async function Home() {
  const { allPostItems, allTagItems } = await fetchAllPostItems(members)

  allPostItems.sort(
    (a: { pubDate: string }, b: { pubDate: string }) =>
      new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  )
  const limitedItems = allPostItems.slice(0, 3)

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-between w-full max-w-7xl flex-wrap">
          {limitedItems.map((post: PostItem) => (
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
          <div className="mt-5">
            {allTagItems.map((item: string, index: number) => (
              <Link href={`?tag=${item}`} key={index}>
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
        <div className="flex justify-between w-full max-w-7xl flex-wrap mt-20 gap-10">
          {allPostItems.map((post: PostItem) => (
            <Card post={post} key={post.guid}></Card>
          ))}
        </div>
      </main>
      <Link
        href="https://www.wantedly.com/companies/hab-co/projects"
        className="p-4 shadow-sm bg-purple-500 w-32 h-32 rounded-full flex main-bg-color fixed bottom-8 right-8 text-white flex items-center hover:opacity-75 ease-in duration-200"
        target="_blank"
        rel="noopener"
      >
        エンジニアの採用はこちら
      </Link>
    </>
  )
}
