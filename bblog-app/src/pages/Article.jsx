import React from 'react'
import { useParams } from 'react-router'
import articles from './article-content';
import NotFound from './NotFound';

const Article = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);
  if(!article){
    return <NotFound/>
  }

  return (
    <div className='p-5 w-3/4 m-auto'>
      <h1 className='text-5xl  font-sans text-black uppercase mb-4 '>{article.title}</h1>
      {article.content.map(paragraph => (<p key={paragraph} className='py-2'>{paragraph}</p>))}

    </div>
  )
}

export default Article