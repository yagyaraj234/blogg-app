import React from 'react'
import { useParams } from 'react-router'
import articles from './article-content';
import NotFound from './NotFound';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
import axios from 'axios'
import AddComment from '../components/AddComment';
import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom'




const Article = () => {

  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ likes: 0, comments: [], canLike: false })
  const { canLike } = articleInfo;

  const [isShown, setIsShown] = useState(false);

  const { user, isLoading } = useUser();

  const handleClick = event => {
    setIsShown(current => !current);
  };

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/ articles/${articleId}`, {
        headers
      })
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    if (isLoading) {
      loadArticleInfo();
    }


  }, [isLoading, user])

  const article = articles.find(article => article.name === articleId);
  // Adding likes 

  const addLike = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/likes`, null, { headers });
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  }

  if (!article) {
    return <NotFound />
  }

  return (
    <div className='p-5 w-3/4 m-auto'>
      <h1 className='text-5xl  font-sans text-black uppercase mb-4 '>{article.title}</h1>

      {article.content?.map((paragraph, i) => (
        <p className='py-2' key={i}>{paragraph}</p>
      ))}

      {/* // interaction icons */}
      <div className='flex flex-row justify-between   '>
        < div className='flex ' >
          {user
            ?
            <div className='flex'><HeartIcon
              className={`heroicons mr-4 cursor-pointer hover:fill-red-700 ${canLike ? 'fill-red-700' : 'fill-white-700'}`} onClick={addLike} />
              <ChatBubbleOvalLeftIcon onClick={handleClick} className='heroicons mr-4 hover:fill-blue-700' />
              <ShareIcon className='heroicons hover:fill-blue-500' />
            </div>

            : <button><Link className='border border-black hover:bg-gray-200 rounded-md p-1 px-2' to='/login'>Login First</Link></button>
          }

        </div>

        {/* Details  */}
        <div className='flex flex-row profile'>
          <h2>{articleInfo.user}</h2>
          <button className=' border border-black px-3 rounded-lg  text-sm  ml-5'  >{articleInfo.follow ? 'Following' : 'Follow'}</button>
        </div>
      </div>
      <div className="flex flex-row ">
        <p className='mr-1'>{articleInfo.likes} like(s)</p>

        <p className='mr-1'></p>
        <p className='mr-1'>{articleInfo.comments.length} comment(s)</p>

      </div>

      {isShown && (
        <AddComment articleName={articleId}
          onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
      )}

      <CommentsList comments={articleInfo.comments} />
    </div>
  )
}

export default Article