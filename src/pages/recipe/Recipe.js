import {useParams} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch'
//style
import './Recipe.css'

import React from 'react'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/'+id
  const {data:recipe, isPending, error} = useFetch(url)
  

  return(
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Take {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing)=>{return <li key={ing}>{ing}</li>})}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}   
    </div>
  ) 
  
}
