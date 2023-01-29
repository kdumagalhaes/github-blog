export const fetchArticleData = (articleName: string) => {
  return fetch(
    `https://api.github.com/search/issues?q=${articleName}%20repo:kdumagalhaes/github-blog`,
  ).then((res) => res.json())
}
