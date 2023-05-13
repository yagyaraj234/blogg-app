import axios from 'axios';
import React from 'react'
import { useState } from 'react'


const AddComment = ({ articleName,onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: comment,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle)
        setName('')
        setComment('')
    }
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Your Name' />
            <input value={comment} type="text" onChange={e => setComment(e.target.value)} placeholder='add comment' />
            <button onClick={addComment} type='submit'>Submit</button>
        </div>
    )
}

export default AddComment