import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Home() { 
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3003')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.name);
        } else {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  }, [navigate]); 

  const location = useLocation();
  const message = location.state && location.state.message;

  return (
    <div className="home-container"> {/* Ajoutez une classe ou un style inline pour définir l'image de fond */}
      {message && <p>{message}</p>}
      <p>Not registered yet? <Link to="/sign-up">Sign up here</Link></p>
    </div>
  );
}

export default Home;
