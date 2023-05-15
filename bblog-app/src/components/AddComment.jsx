import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import useUser from '../hooks/useUser';


const AddComment = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const { user } = useUser()

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : token;
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: comment,
        }, { headers });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle)
        setName('')
        setComment('')
    }
    return (
        <div className='flex'>
            

            <input className=' border pl-2 rounded mr-2 ' value={comment} type="text" onChange={e => setComment(e.target.value)} placeholder='Add comment' />
            <button className='border border-radius-md border-gray-600 rounded px-3 hover:bg-gray-300 ' onClick={addComment} type='submit'>Submit</button>
        </div>
    )
}

export default AddComment