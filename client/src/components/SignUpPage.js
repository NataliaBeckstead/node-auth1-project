import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "../utils/axios";

function SignUpPage (props) {
  const {handleSubmit, register, errors, reset} = useForm();

  const onSubmit = value => {
    axios.post('http://localhost:5000/api/auth/register', value)
    .then(response => {
        console.log(response);
        alert('successfully registered!')
        props.history.push('/')
    })
    .catch(err => console.log(err)); 
    reset()
  }

  return (
    <div>

        <h2>Create an account</h2>
    
        <form onSubmit={handleSubmit(onSubmit)} >
        <div  className="login-form">
        <label htmlFor="username1">Username:&#8201;&#8201;&#8201;
        <input
            id="username1"
            name="username"
            placeholder='username'
            ref={register({
            required: 'Required',
            })}
        />
        </label>
        {errors.username && errors.username.message}

        <label htmlFor="password1">Password:&#8201;&#8201;&#8201;&#8201;
        <input
            id="password1"
            name="password"
            type="password"
            placeholder="password"
            ref={register({
            required: 'Required',
            })}
        />
        </label>
        {errors.password && errors.password.message}

        <button type="submit" className="submitbutton" >Submit</button>
        <Link to='/' className="loglink" >
            <h3>Have an account already?</h3>
        </Link>
        </div>
        </form>
        </div>
    );
}

export default SignUpPage;