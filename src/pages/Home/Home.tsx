import { Profile } from '../../components/Profile/Profile'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { ArticlesArea } from '../../components/ArticlesArea/ArticlesArea'

export function Home() {
  return (
    <>
      <Profile username="kdumagalhaes" />
      <SearchBar />
      <ArticlesArea />
    </>
  )
}
