export const normalizePathname = (pathname: string) => {
  const lowerCasePathname = pathname.toLowerCase()
  const pathnameWithoutSlashes = lowerCasePathname.slice(9)
  const normelizedPathname = pathnameWithoutSlashes.normalize()

  return normelizedPathname
}
