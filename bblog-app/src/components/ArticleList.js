import React from 'react'
import articles from '../pages/article-content'
import { Link } from 'react-router-dom'

const ArticleList = () => {
  return (
    <>
    {articles.map(article =>(
      <Link key={article.name} to={`/articles/${article.name}`} className=' hover:cursor-pointer'>
        <h2 className='text-3xl hover:text-gray-700  p-2'>👉{article.title}</h2>
        <p className=' text-md pl-4 pb-2 border-b-2'>{article.content[0].substring(0,250)}.....</p>
      </Link>
    ))}
    
    </>
  )
}

export default ArticleList