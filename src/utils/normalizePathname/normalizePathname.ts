export const normalizePathname = (pathname: string) => {
  const lowerCasePathname = pathname.toLowerCase()
  const pathnameWithoutSlashes = lowerCasePathname.slice(9)
  // const pathnameWithoutSpecialCharacters = pathnameWithoutSlashes.replace(
  //   /[&\/\\#,+()$~%.'":*?<>{}]/g,
  //   '',
  // )
  const normalizedPathname = pathnameWithoutSlashes.normalize()

  return normalizedPathname
}
