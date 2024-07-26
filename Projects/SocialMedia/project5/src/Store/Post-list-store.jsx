import React, { createContext, useReducer } from 'react';

// Create the context with default values
const PostListContext = createContext({
  postList: [],
  deletePost: () => {},
  addInitialPosts: () => {},
  addPost: () => {},
});

// Define the reducer function to handle actions
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.id !== action.payload.postId);
    case 'ADD_POST':
      return [action.payload, ...currPostList];
    case 'ADD_INITIAL_POSTS':
      return [...action.payload.posts]; // Correctly update the post list with initial posts
    default:
      return currPostList;
  }
};

// Define the PostListProvider component
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);

  // Define the deletePost function to dispatch actions
  const deletePost = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: { postId } });
  };

  // Define the addPost function to dispatch actions
  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: Date.now().toString(), // Ensure ID is a string
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userID: userId,
        tags: tags,
      }
    });
  };

  // Define the addInitialPosts function to dispatch actions
  const addInitialPosts = (posts) => {
    dispatch({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, deletePost, addPost, addInitialPosts }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
export { PostListContext };
