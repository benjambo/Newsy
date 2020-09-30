import { NEWS_API_KEY } from '../config'

export const getbArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    )
    const json = await response.json()
    return json
    
}

export const getArticles = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  )
  const json = await response.json()
  return json
}
