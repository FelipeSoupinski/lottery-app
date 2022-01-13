import React from 'react'
import http from '../../utils/Axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../utils/UseForm'

const SignupCard: React.FC = () => {
  let navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(
    signupUserCallback,
    initialState
  );

  async function signupUserCallback() {
    const request = await http.post('/signup',
      {
        ...values
      })
    if (request.status === 201) {
      navigate('/login')
    } else {
      alert('Invalid data provided!')
    }
  }

  return <div className="card">
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <div className='row'>
          <input
            type="text"
            placeholder='Name'
            id='name'
            name='name'
            className='form-control'
            onChange={onChange} />
        </div>
        <div className='row'>
          <input
            type="email"
            id='email'
            name='email'
            placeholder='Email'
            className='form-control mt-3'
            onChange={onChange} />
        </div>
        <div className='row'>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='Password'
            className='form-control mt-3'
            onChange={onChange} />
        </div>
        <div className="row btn-register">
          <div className="col">
            <button className='btn btn-success'>Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default SignupCard;