import React from 'react'
import { useParams } from 'react-router'
import articles from './article-content';
import NotFound from './NotFound';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';


const Article = () => {
  const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]})

  useEffect(()=>{
    setArticleInfo({upvotes:3,comments:[]});
  },[])



  const { articleId } = useParams();
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
        <Link to='/likes'><p className='mr-1'>{article.likes} likes</p></Link>

        <p className='mr-1'></p>
        <Link to='/comments'><p className='mr-1'>{article.comments.length} comments</p></Link>
      </div>





    </div>
  )
}

export default Article