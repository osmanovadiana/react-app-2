import React from 'react'
import './styles.css'

export default function PostListItem(props) {
  return (
    <div className='post-content'>
      <ul className='post-content__list'>
        <li className='post-list__time'>{props.createdAt}</li>
        <li className='post-list__item'>{props.username}</li>
        <li className='post-list__item'>{props.body}</li>
      </ul>
    </div>
  )
} 