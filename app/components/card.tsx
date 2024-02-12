function convertToJapanTime(utcDateString: any) {
  const utcDate = new Date(utcDateString)
  const dateText = `${utcDate.getFullYear()}年${utcDate.getMonth() +
    1}月${utcDate.getDate()}日`
  return dateText
}

const Card = ({ post }: any) => {
  return (
    <>
      <a
        href={post.link}
        className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96"
        key={post.guid}
      >
        <div className="p-5 min-h-full">
          <div className="title">
            <div className="min-h-40 flex flex-wrap items-center border rounded-xl px-2 py-5 border-gray-300 w-full">
              <h5 className="mb-2 text-xl font-semibold">{post.title}</h5>
              <div className="flex flex-wrap justify-end gap-1 mt-auto ml-auto">
                {post.categories?.map((category: any, index: number) => (
                  <span
                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    key={index}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <img
              className="w-12 h-12 rounded rounded-full"
              src={post.avatarSrc}
              alt="Large avatar"
            />
            <span className="font-bold tracking-tight text-gray-900 dark:text-white">
              {post.name}
            </span>
          </div>
          <div className="text-sm font-normal text-end">
            {convertToJapanTime(post.pubDate)}
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
      </a>
    </>
  )
}

export default Card
