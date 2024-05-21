import React from 'react'

const Footer = () => {
  return (
    <div className='bg-success-subtle py-3 text-center text-success'>
      <h3>&copy; All Right Reserved {new Date().getFullYear()}</h3>
      <h2>The Meal Place</h2>
    </div>
  )
}

export default Footer;
