import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../../layout/LoginLayout";
import LoginCard from "./LoginCard";

const Login: React.FC<{}> = (props) => {
  return <LoginLayout>
    <div className="col text-center right">
      <h4>Authentication</h4>
      <LoginCard />
      <div className='row'>
        <div className="col text-center signup">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  </LoginLayout>
}

export default Login;