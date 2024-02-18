// utils.js
import parseRSSFeed from './rss'

export async function fetchAllPostItems(members) {
  let allPostItems = []
  let allTagItems = []

  for (const member of members) {
    const feedItems = member.sources
    for (const feedItem of feedItems) {
      const items = await parseRSSFeed(feedItem)
      for (const item of items) {
        item.avatarSrc = member.avatarSrc
        item.name = member.name
        item.categories?.map((category) => {
          if (!allTagItems.includes(category)) {
            allTagItems.push(category)
          }
        })
      }
      if (items) allPostItems = [...allPostItems, ...items]
    }
  }

  allPostItems.sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  )

  return { allPostItems, allTagItems }
}
