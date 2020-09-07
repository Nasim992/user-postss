import React, { useState, useEffect } from 'react';
import Commentsdetail from '../CommentsDetail/Commentsdetail';

const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`)
        .then(response => response.json())
        .then(data => setComments(data))
    }, []);
    
    return (
        <div>
            <h1>Comments</h1>
            {
             comments.map(comment =><Commentsdetail comment={comment}></Commentsdetail>)                  
            }
        </div>
    );
};

export default Comments;