import { Link } from "react-router-dom";

const Navbar: React.FC<{}> = () => {
  const logoutHandler = () => {
    localStorage.removeItem('token')
  }

  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <h2>TGL</h2>
      <div className="row float-right">
        <div className="col-sm">
          <span className="gray">Account</span>
        </div>
        <div className="col-sm">
          <Link to="/login" onClick={logoutHandler}><span className="gray">Sair</span></Link>
        </div>
      </div>
    </div>
  </nav>
};

export default Navbar;