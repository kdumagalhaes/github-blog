export const getArticleIdByPathname = (pathname: string) => {
  const articleId = pathname.slice(9)
  const articleIdNumber = Number(articleId)
  return articleIdNumber
}
