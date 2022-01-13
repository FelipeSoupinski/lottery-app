import React from 'react'

const ForgetPasswordCard: React.FC = () => {
  return <div className="card">
    <div className="card-body">
      <form>
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