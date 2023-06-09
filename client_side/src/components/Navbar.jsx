/* import React from 'react' */
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <div className="navbar">
      <div >
      <Link className="link" to="/">thePhoneCave</Link>
      </div>
      <div className="navbarRight">   
      </div>
    </div>
  );
}

export default Navbar;