import React from 'react'
import { useParams } from 'react-router'
import articles from './article-content';
import NotFound from './NotFound';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'


const Article = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ likes: 0, comments: [] })

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`)
      const newArticleInfo=response.data;
      setArticleInfo(newArticleInfo);
    }
    loadArticleInfo();
  }, [])



  const article = articles.find(article => article.name === articleId);
  if (!article) {
    return <NotFound />
  }

  return (
    <div className='p-5 w-3/4 m-auto'>
      <h1 className='text-5xl  font-sans text-black uppercase mb-4 '>{article.title}</h1>

      {article.content.map(paragraph => (<p key={paragraph} className='py-2'>{paragraph}</p>))}
      <div className='flex flex-row justify-between  '>
        < div className='flex'>
          <HeartIcon className='heroicons mr-4 ' />
          <ChatBubbleOvalLeftIcon className='heroicons mr-4' />
          <ShareIcon className='heroicons' />
        </div>
        <div className='flex flex-row profile'>
          <h2>{article.user}</h2>
          <button className=' border border-black px-3 rounded-lg  text-sm  ml-5'  >{article.follow ? 'Following' : 'Follow'}</button>
        </div>
      </div>
      <div className="flex flex-row">
        <Link to='/likes'><p className='mr-1'>{articleInfo.likes} like(s)</p></Link>

        <p className='mr-1'></p>
        <Link to='/comments'><p className='mr-1'>{articleInfo.comments.length} comment(s)</p></Link>
      </div>





    </div>
  )
}

export default Article