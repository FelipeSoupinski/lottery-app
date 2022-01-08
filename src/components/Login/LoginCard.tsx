import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../utils/UseForm'
import './login.css'

const LoginCard: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  async function loginUserCallback() {
    // send "values" to database
    console.log(values)
  }

  return <div className="card">
    <form onSubmit={onSubmit}>
      <div className='row'>
        <input id='email' name='email' type="email" placeholder='Email' onChange={onChange} />
      </div>
      <div className='row'>
        <input id='password' name='password' type="password" placeholder='Password' onChange={onChange} />
      </div>
      <div className='row forget-password'>
        <div className="col">
          <Link to="/forget-password">
            <span className=''>I forget my password</span>
          </Link>
        </div>
      </div>
      <div className="row btn-login">
        <div className="col">
          <button>Log In</button>
        </div>
      </div>
    </form>
  </div>
}

export default LoginCard;