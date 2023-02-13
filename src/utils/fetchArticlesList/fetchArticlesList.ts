export const fetchArticlesList = (url: string) => {
  try {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data?.items)
  } catch (error) {
    console.warn(error)
  }
}
