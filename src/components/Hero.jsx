import React from 'react'

const Hero = () => {
  return (
    <div className='hero container d-flex justify-content-start align-items-center'>
      <div className="text-start">
        <h1 className="text-white display-5">Healthy Foods</h1>
        <h1 className="fw-light text-white">Explore Different Meal </h1>
        <button className="btn btn-success">
            <a href="#below" className='text-decoration-none text-white'>See More Below</a>
        </button>
      </div>
    </div>
  )
}

export default Hero
