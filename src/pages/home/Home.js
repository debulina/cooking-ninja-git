import {useFetch} from '../../hooks/useFetch'
import React from 'react'
import recipe from '../recipe/Recipe';
//components
import RecipeList from '../../components/RecipeList';
//style
import './Home.css'

const url = "http://localhost:3000/recipes"


export default function Home() { 
  const {data, isPending, error} = useFetch(url);
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} /> }
    </div>
  )
}
