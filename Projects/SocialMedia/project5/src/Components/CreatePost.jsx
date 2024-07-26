import React, { useContext, useRef } from 'react';
import { PostListContext } from '../Store/Post-list-store';  // Import the correct context

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);  // Use PostListContext to get addPost function
  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(',').map(tag => tag.trim());  // Fixed to properly split and trim tags

    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value= "";
    reactionElement.current.value= "";
    tagsElement.current.value = "";


    addPost(userId, postTitle, postBody, reaction, tags);  // Call addPost with correct arguments
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">User ID</label>
        <input
          type="text"
          ref={useridElement}
          className="form-control"
          id="userID"
          aria-describedby="emailHelp"
          placeholder="Your User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Post Content</label>
        <textarea
          ref={postBodyElement}
          rows='4'
          className="form-control"
          id="content"
          aria-describedby="emailHelp"
          placeholder="What's on your mind today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reactions</label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reaction"
          aria-describedby="emailHelp"
          placeholder="How many people reacted to your Post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="Please Enter the tags (comma separated)"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
