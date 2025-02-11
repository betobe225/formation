import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import validation from './LoginValidation';
import axios from 'axios';

function Login() { // Renommez le composant à Login
    
    const [values, setValues] = useState({
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
        setErrors(validation(values));
        if( errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
               if(res.data === "Success"){
                navigate('/Home')
               } else {
                alert("No record existed");
               }
            })
            .catch(err => console.log(err));
          }
    }

    return (
        <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name='password' // Utilisez 'password' au lieu de 'Password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                    <p>You agree to our terms and policies </p>
                    <Link to="/signup" className='btn btn-default border w-100 b-light rounded-0'>Create Account</Link> 
                </form>
            </div>
        </div>
    );
}

export default Login; // Exportez Login au lieu de login
