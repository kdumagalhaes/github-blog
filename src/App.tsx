import { ThemeProvider } from 'styled-components'
import { ArticlesArea } from './components/ArticlesArea/ArticlesArea'
import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { SearchBar } from './components/SearchBar/SearchBar'
import { SearchProvider } from './context/SearchContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchProvider>
        <Header />
        <Profile username="kdumagalhaes" />
        <SearchBar />
        <ArticlesArea />
      </SearchProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
