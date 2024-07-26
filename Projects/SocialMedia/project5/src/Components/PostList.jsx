import React, { useContext, useEffect, useState } from 'react';
import Post from "./Post";
import { PostListContext } from '../Store/Post-list-store'; 
import Welcome from "./Welcome";
import LoadingSpinner from './LoadingSpinner';


const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching , setFetching] = useState(false);

  useEffect(()=>{
  setFetching(true);

    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
      setFetching(false); // Pass the entire data object
    
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  
}, []);
  

  
    
    
  
  

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <Welcome  />}
      
      { !fetching &&   postList.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
