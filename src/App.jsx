import { useState } from 'react'
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ArticlesList />
    </>
  )
}

export default App
