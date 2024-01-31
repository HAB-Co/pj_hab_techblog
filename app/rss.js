// utils/rss.js

import Parser from 'rss-parser'

const parseRSSFeed = async (url) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)
  return feed.items
}

export default parseRSSFeed
