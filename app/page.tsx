import parseRSSFeed from './rss'
import Link from 'next/link'

export default async function Home() {
  const rssFeedUrl = 'https://zenn.dev/catnose99/feed' // RSSフィードのURLを指定
  const items = await parseRSSFeed(rssFeedUrl)
  const limitedItems = items.slice(0, 3)

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
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
                    href="#"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
          {limitedItems.map((post) => (
            <Link
              href={post.link}
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={post.enclosure.url} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-semibold">{post.title}</h5>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    Next.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    vercel
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    Rails
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-3">
                  <img
                    className="w-12 h-12 rounded rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Large avatar"
                  />
                  <span className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {post['dc:creator']}
                  </span>
                </div>
                <div className="text-sm font-normal text-end">
                  {post.pubDate}
                </div>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg main-bg-color mt-2">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full max-w-7xl w-full mt-20">
          <h3 className="text-3xl font-bold dark:text-white">Members</h3>
          <div className="flex mt-6 gap-5">
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Large avatar"
              />
            </a>
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Large avatar"
              />
            </a>
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Large avatar"
              />
            </a>
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt="Large avatar"
              />
            </a>
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Large avatar"
              />
            </a>
            <a href="#">
              <img
                className="w-20 h-20 rounded rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Large avatar"
              />
            </a>
          </div>
        </div>
        <div className="text-start w-full max-w-7xl w-full mt-20">
          <h3 className="text-3xl font-bold dark:text-white">Tags</h3>
          <div className="flex mt-6">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Alternative
            </button>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Dark
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Light
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Green
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Red
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Yellow
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Purple
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full max-w-7xl flex-wrap mt-20 gap-10">
          {items.map((post) => (
            <Link
              href={post.link}
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={post.enclosure.url} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-semibold">{post.title}</h5>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    Next.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    vercel
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    Rails
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-3">
                  <img
                    className="w-12 h-12 rounded rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Large avatar"
                  />
                  <span className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {post['dc:creator']}
                  </span>
                </div>
                <div className="text-sm font-normal text-end">
                  {post.pubDate}
                </div>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg main-bg-color mt-2">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

// export async function getStaticProps() {
//   try {
//     const rssFeedUrl = 'https://zenn.dev/catnose99/feed' // RSSフィードのURLを指定
//     const items = await parseRSSFeed(rssFeedUrl)

//     return {
//       props: {
//         feedItems: items,
//       },
//       revalidate: 60 * 60, // ページを再生成する間隔（秒単位）
//     }
//   } catch (error) {
//     console.error('Error fetching RSS feed:', error)
//     return {
//       props: {
//         feedItems: [],
//       },
//     }
//   }
// }
