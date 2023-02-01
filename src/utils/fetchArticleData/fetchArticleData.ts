export const fetchArticleData = (articleId: string) => {
  try {
    return fetch(
      `https://api.github.com/repos/kdumagalhaes/github-blog/issues/${articleId}`,
    ).then((res) => res.json())
  } catch (error) {
    console.warn(error)
  }
}
