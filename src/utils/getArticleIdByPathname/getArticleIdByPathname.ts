export const getArticleIdByPathname = (pathname: string) => {
  const articleId = pathname.slice(9)
  return articleId
}
