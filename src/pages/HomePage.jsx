import React from 'react'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
    <Hero/>
    <SearchForm/>
    <MealList/>
    <Contact/>
    </div>
  )
}

export default HomePage
