import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordCard: React.FC = () => {
  let navigate = useNavigate();

  const onSubmit = () => {
    navigate('/login')
  }

  return <div className="card">
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <div className='row'>
          <input 
          type="email" 
          id='email'
          name='email'
          placeholder='Email'
          className='form-control' />
        </div>
        <div className="row btn-forget">
          <div className="col">
            <button className='btn btn-success'>Send Link</button>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default ForgetPasswordCard;