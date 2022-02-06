import React from 'react';
import PostListItem from './post-list-item';
import './styles.css'

const PostList = ({post}) => {
  const elements = post.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id}>
        <PostListItem {...itemProps}/>
      </li>
    )
  });

  return (
    <ul className='post-content__list'>
      {elements}
    </ul>
  )
}

export default PostList;