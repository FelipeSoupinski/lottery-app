import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../../layout/LoginLayout";
import ForgetPasswordCard from "./ForgetPasswordCard";

const ForgetPassword: React.FC = () => {
  return <LoginLayout>
    <div className="col text-center right">
      <h4>Reset Password</h4>
      <ForgetPasswordCard />
      <div className='row'>
        <div className="col text-center signup">
          <Link to="/login">Back</Link>
        </div>
      </div>
    </div>
  </LoginLayout>
}

export default ForgetPassword;
