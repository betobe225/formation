import React from 'react'

function Blog() {
  return (
    <div id='blog'>
        <h1>contact us</h1>
        <form>
            <input type="text" placeholder='Full name' required/>
            <input type="text" placeholder='Full name' required/>
            <textarea placeholder='Write here.....' name='message'></textarea>
            <input type="submit" value='Send'/>
        </form>
      
    </div>
  )
}

export default Blog
