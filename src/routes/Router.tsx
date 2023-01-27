import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../Layouts/DefaultLayout/DefaultLayout'
import { Article } from '../pages/Article/Article'
import { Home } from '../pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
      </Route>
    </Routes>
  )
}
