import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  HomePage,
  AboutPage,
  CategoryPage,
  ArchivePage,
  ArticleDetail
} from './pages'
import { MainLayout } from './layout'
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/category" element={<CategoryPage />}></Route>
            <Route path="/archive" element={<ArchivePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route
              path="/article/:articleId"
              element={<ArticleDetail />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
