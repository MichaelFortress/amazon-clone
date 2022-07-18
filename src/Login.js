import React, { useState} from 'react';
import {Link} from "react-router-dom";
import './Login.css';

function Login() {
    // Longin-functionality
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 
    const signIn = e => {
       e.preventDefult();

        // auth
        //     .signInUserWithEmailAndPassword(email, password)
        //     .then(auth => {
        //          //this successfully create a new user email and password
        //          if (auth) {
        //             history.push('/')
        //         }  
           
        //         })         
        //     .catch(error => alert(error.message))
    }

    const register = e => {
        

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // this successfully create a new user email and password
    //             if (auth) {
    //                 history.push('/Home')
    //             }    
    //         })
    //         .catch(error => alert(error.message))
             

    };
    
  return (
    <div className="login">
      <Link to="/Home">
        <img className = "login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="amazon" />
      </Link>
      <div className='login__container'>
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password'value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit'
             onClick={signIn}
             className='login__signInButton'>Sign in</button>
          </form>
          <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
              Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button 
            onClick={register} 
            className='login__registerButton'>Create your Amazon Account 
          </button>

      </div>
      


    </div>
  )
}

export default Login;
