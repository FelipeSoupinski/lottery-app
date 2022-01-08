import React from 'react'
import './login.css'

const SignupCard: React.FC = () => {
  return <div className="card">
    <form>
      <div className='row'>
        <input type="text" placeholder='Name' />
      </div>
      <div className='row'>
        <input type="email" placeholder='Email' />
      </div>
      <div className='row'>
        <input type="password" placeholder='Password' />
      </div>
      <div className="row btn-register">
        <div className="col">
          <button>Register</button>
        </div>
      </div>
    </form>
  </div>
}

export default SignupCard;