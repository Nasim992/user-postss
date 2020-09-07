import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import PrimarySearchAppBar from '../NavBar/NavBar';

const Home = () => {
    
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
     .then(data => setPosts(data))
  },[])
    return (
      <div style={{ background: 'whitesmoke' }}>
        <PrimarySearchAppBar notifications={posts.length}></PrimarySearchAppBar>
        {
            posts.map(post => <Posts post={post}></Posts>)
        }
        </div>
    );
};

export default Home;