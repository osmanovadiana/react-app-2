import React, { useState } from 'react';
import './styles.css'
import PostList from './post-list';
import PostAddForm from './post-add-form'


export default function Modal({onCloseButtonClick, img}) {
  const [posts, setPosts] = useState([])

  
  const addPost = (text, parentId, name) => {
    createPost(text, parentId, name).then(post => {
      setPosts([...posts, post])
    })
  }


  const createPost = async (text, name, parentId = null) => {
    return {
      id: Math.random().toString(36),
      body: text,
      parentId,
      username: name,
      createdAt: new Date().toLocaleString("ru", options)
    }
  }

  let options = {
	  year: 'numeric',
	  month: 'numeric',
	  day: 'numeric',
	  timezone: 'UTC'
  };

  

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className='btn-close' onClick={onCloseButtonClick}></button>
          <div className="modal-body">
            <img className='img' src={img} alt=''/>
            <PostAddForm submitLabel='Оставить комментарий' handleSubmit={addPost}/>
          </div>
          <div className='post-list'>
            <PostList post={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
