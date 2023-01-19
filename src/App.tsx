import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { SearchBar } from './components/SearchBar/SearchBar'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Profile />
      <SearchBar />
      <GlobalStyle />
    </ThemeProvider>
  )
}
