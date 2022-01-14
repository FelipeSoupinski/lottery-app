import React from 'react'
import http from '../../utils/Axios'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../utils/UseForm'

const LoginCard: React.FC = () => {
  let navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  async function loginUserCallback() {
    const request = await http.post('/login',
      {
        ...values
      })
      console.log(values)
    if (request.status === 200) {
      const token = request.data.token
      localStorage.setItem('token', token)
      navigate('/home')
    }
  }

  return <div className="card">
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <div className='row form-group'>
          <input
            id='email'
            name='email'
            type="email"
            className='form-control'
            placeholder='Email'
            onChange={onChange} />
        </div>
        <div className='row form-group mt-3'>
          <input
            id='password'
            name='password'
            type="password"
            placeholder='Password'
            className='form-control'
            onChange={onChange} />
        </div>
        <div className='row forget-password'>
          <div className="col">
            <Link to="/forget-password">
              I forget my password
            </Link>
          </div>
        </div>
        <div className="row btn-login">
          <div className="col">
            <button className='btn btn-success'>Log In</button>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default LoginCard;