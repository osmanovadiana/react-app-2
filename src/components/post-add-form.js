import React, { useState } from 'react';
import './styles.css'

export default function PostAddForm({submitLabel, handleSubmit}) {
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const isButtonDisabled = (text.length && name.length) === 0;

  const onSubmit = e => {
    e.preventDefault()
    handleSubmit(text, name)
    setText('')
    setName('')
  }

  return (
    <>  
      <form onSubmit={onSubmit}>
         <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Ваш комментарий"
          value={text}
          className="form-input"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          type="submit" 
          disabled={isButtonDisabled}
          className="add-btn"
        >{submitLabel}</button>
      </form>
    </>
  )
}
