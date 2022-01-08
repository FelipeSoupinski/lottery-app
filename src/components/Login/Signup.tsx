import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../../layout/LoginLayout";
import SignupCard from "./SignupCard";

const Signup: React.FC = () => {
  return <LoginLayout>
    <div className="col text-center right">
      <h4>Registration</h4>
      <SignupCard />
      <div className='row'>
        <div className="col text-center signup">
          <Link to="/login">Back</Link>
        </div>
      </div>
    </div>
  </LoginLayout>
}

export default Signup;
