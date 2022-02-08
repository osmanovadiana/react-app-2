import React from 'react'
import './styles.css'

export default function PostListItem({createdAt, username, body}) {
  return (
    <div className='post-content'>
      <ul className='post-content__list'>
        <li className='post-list__time'>{createdAt}</li>
        <li className='post-list__item'>{username}</li>
        <li className='post-list__item'>{body}</li>
      </ul>
    </div>
  )
} 
