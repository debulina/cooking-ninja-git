import {useState} from 'react'
import React from 'react'
//style
import './Create.css'


export default function Create() {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(title, method, cookingTime)
  }
  

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input 
            type='text' onChange={(e)=>setTitle(e.target.value)} value={title} required
          />

          <span>Recipe Method:</span>
          <textarea
            onChange={(e)=>setMethod(e.target.value)} value={method} required
          />

          <span>Cooking Time(min):</span>
          <input
            type='number'  onChange={(e)=>setCookingTime(e.target.value)} value={cookingTime} required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}
