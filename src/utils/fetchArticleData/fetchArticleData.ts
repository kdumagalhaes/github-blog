export const fetchArticleData = (param: string | number) => {
  if (typeof param === 'string') {
    return fetch(
      `https://api.github.com/search/issues?q=${param}%20repo:kdumagalhaes/github-blog`,
    ).then((res) => res.json())
  }
  return fetch(
    `https://api.github.com/repos/kdumagalhaes/github-blog/issues/${param}`,
  ).then((res) => res.json())
}
