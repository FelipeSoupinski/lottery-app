import React from "react";

const LoginLayout: React.FC = (props) => {
  return <section className="container">
    <div className="row">
      <div className="col">
        <h2 className="logo">The Greatest App for LOTTERY</h2>
      </div>
      {props.children}
    </div>
  </section>
}

export default LoginLayout;
