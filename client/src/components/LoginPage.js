import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';



function LoginPage() {
  const {handleSubmit, register, errors} = useForm();
  const history = useHistory();

  const onSubmit = value => {
    console.log(value)
    axios.post('http://localhost:5000/api/auth/login', value)
    .then(response => {
        console.log(response);
        //history.push('/Dashboard')
    })
    .catch(err => console.log(err)); 
  }

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form">

        <label htmlFor="username">Username:&#8201;&#8201;&#8201;
          <input
            id="username"
            name="username"
            placeholder='username'
            ref={register({
              required: 'Required',
            })}
          />
        </label>
        {errors.username && errors.username.message}

        <label htmlFor="password">Password:&#8201;&#8201;&#8201;&#8201;
          <input
            id="password"
            name="password"
            type="password"
            placeholder='password'
            ref={register({
              required: 'Required',
            })}
          />
        </label>
        {errors.password && errors.password.message}

        <button type="submit" className="submitbutton" >Submit</button>
        
        <Link to='/sign-up-page' className="loglink" >
          <h3>Dont have an account yet?</h3>
        </Link>
      </form>
    </div>

      
  );
}

export default LoginPage;