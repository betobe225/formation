import React from 'react'
import './about.css'
import aboutassets from '../../Assets/about.png'

function About() {
  return (
    <div id='about'>
       <div className='about-image'> 
       <img src={aboutassets} alt=''/>
       </div>

       <div className='about-text'>
        <h1>LEARN MORE</h1>
        <p>Lorem </p>
        <button>read more </button>
       </div>
      
    </div>
  )
}

export default About
