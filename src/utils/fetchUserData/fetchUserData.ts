export const fetchUserData = (username: string) => {
  try {
    return fetch(`https://api.github.com/users/${username}`).then((res) =>
      res.json(),
    )
  } catch (error) {
    console.warn(error)
  }
}
