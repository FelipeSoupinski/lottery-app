import React from 'react'
import './login.css'

const ForgetPasswordCard: React.FC = () => {
  return <div className="card">
    <form>
      <div className='row'>
        <input type="email" placeholder='Email' />
      </div>
      <div className="row btn-forget">
        <div className="col">
          <button>Send Link</button>
        </div>
      </div>
    </form>
  </div>
}

export default ForgetPasswordCard;