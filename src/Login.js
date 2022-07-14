import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleOnClick = (e) => {
    e.preventDefault();
    if (email === 'test@email.com' && password === '123') {
      setIsLoggedIn(true);
      navigate('/todo');
    } else {
      console.log('WRONG EMAIL OR PASSWORD!!!!');
    }


    // navigate("/todo");
  }
  return (

    <div className="bg__img">
      <form className="form">
        <div className="container">
          <label for="uname"><b>Email</b></label>
          <input
            type="text"
            placeholder="Email"
            name="uname"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label for="psw"><b>Password</b></label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleOnClick}>Login</button>
        </div>
      </form>
    </div>
  )
}



export default Login;