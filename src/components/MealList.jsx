import React from 'react';
import { useGlobalContext } from '../Context';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const MealList = () => {
    const { isLoading, foods } = useGlobalContext();
    if (isLoading) {
        return <Loading />
    }
    if (foods.length === 0) {
        return <h1 className='text-center my-3 text-success'>No food found for your search!</h1>
    }
  return (
    <div id='below' className='d-flex justify-content-between align-items-center flex-wrap container'>
      {
        foods.map((food) =>{
            const{idMeal, strMeal, strMealThumb, strCategory} = food;
            return <Link to={`/meal/${idMeal}`} key={idMeal} className='text-decoration-none my-3 mx-auto'>
                <div style={{width:'280px'}} className="shadow shadow-lg rounded-2">
                  <img src={strMealThumb} alt={strMeal} className='w-100 rounded-top-2'/>
                  <h4 className="text-success text-center mt-3 pb-2 fw-bold">{strMeal}</h4>
                  <p className="text-center text-success">{strCategory}</p>
                </div>
            </Link>
        })
      }
    </div>
  )
}

export default MealList;
