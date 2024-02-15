import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
        <h1> SignUp Page </h1>
        <form onSubmit={handleSubmit} className='signup-form'>
            <input 
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='signup-button'>SignUp</button>
        </form>
        <p>Need a Login? <Link to="/Login" /></p>
    </div>
  )
}


export default SignUp;
