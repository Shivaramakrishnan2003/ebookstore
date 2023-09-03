import React, { useState } from 'react'
import Bookservice from'./Bookservice'
import './Login.css'
import { useNavigate } from 'react-router';


function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[cred, setCred] = useState([]);
  let navigate = useNavigate('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let canLog = false;
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`)

        try{
            Bookservice.getBooks()
            .then((response)=>{
                console.log(response.data)
                setCred(response.data)
            })
            console.log("Fetched");
            cred.forEach( (detail) => {
                detail.custDetails.forEach( (d) => {
                    if(d.custEmail === username && d.custPass === password){
                        canLog = true;
                    }
                })
            })
            console.log(canLog)
            if(canLog===true){
                navigate('/Home')
                alert('Logged In')
            }
            else{
                throw new Error('The entered user credentials are incorrect')
            }
        }
        catch(error){
            alert('Invalid login')
            console.error('Error logging in', error)
        }
    }
    

  return (
      <div className='login'>
        <div className='login-container'>
        <h1 style={{fontFamily:"SFPro"}}>eBookStore</h1>
          <div className='form-container'>
            <h1 style={{fontFamily:"SFPro"}}>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='logincred'
                  placeholder='Username'
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required/>
              </div>
              <div>
                <input
                  className='logincred'
                  placeholder='Password'
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required/>
              </div>
              <div>
                <button className='but' type="submit">Submit</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login