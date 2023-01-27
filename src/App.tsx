import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SearchProvider } from './context/SearchContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SearchProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
