import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{}> = () => {
  let location = useLocation()

  const logoutHandler = () => {
    localStorage.removeItem('token')
  }

  return <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{maxHeight: '70px'}}>
    <div className="container">
      <div className="row" style={{
        alignItems: 'center', width: '100%'
      }}>
        <div className="col-2">
          <h2>TGL</h2>
        </div>
        <div className="col-4" style={{textAlign: 'start'}}>
          {location.pathname === '/new-bet' && 
            <Link to="/" onClick={logoutHandler}><span className="gray">Home</span></Link>}
        </div>
          <div className="col-4" style={{textAlign: 'end'}}>
            <span className="gray">Account</span>
          </div>
          <div className="col-2" style={{textAlign: 'end'}}>
            <Link to="/login" onClick={logoutHandler}><span className="gray">Logout</span></Link>
          </div>
      </div>
    </div>
  </nav>
};

export default Navbar;