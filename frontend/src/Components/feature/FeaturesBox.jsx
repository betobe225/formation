import React from 'react'

function FeaturesBox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
      <div className='a-b-text'>
        <h2>{props.title} </h2>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
    </div>
  )
}

export default FeaturesBox
