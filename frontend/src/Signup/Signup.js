import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
}); 

const navigate = useNavigate();
const [errors, setErrors] = useState({});

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
}   

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
         navigate('/')
      })
      .catch(err => console.log(err));
    }
}


  return (
    <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>

      <div className='mb-3'>
              <label htmlFor='Name'><strong>Name</strong></label>
              <input type="text" placeholder=" enter Name" name='name' onChange={handleInput} className='form-control rounded-0'/>
              {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type="email" placeholder=" enter Email" name='email'onChange={handleInput} className='form-control rounded-0'/>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input type="password" placeholder=" enter password" name='password' onChange={handleInput}className='form-control rounded-0' />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-succes w-100 rounded-0'> <strong>Sign up </strong></button>
          <p>You are agree to our terms and policies </p>
      <Link to="/login" className='btn btn-default border w-100 b-light rounded-0'>login</Link> 
      </form>
    </div>
  </div>
  )
}

export default Signup
