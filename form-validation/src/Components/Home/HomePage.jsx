import React from "react"
import {Link} from "react-router-dom";
const HomePage = () =>{
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{paddingTop: '0px'}}>
  <div className="container-fluid" style={{ background: '#4FC0D0',height:'50px'}}>
    <a className="nav-link active" aria-current="page">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navBarCustom" id="navbarNav" style={{ justifyContent: 'center'}}>
      <ul className="navbar-nav navBarCustom" style={{fontWeight: '500'}}>
        <li className="nav-item" style={{padding: '0px 50px 0px 50px',cursor:"pointer"}} className="navLiLink">
         <Link to="/add"> Product OnBoard</Link>
        </li>
        <li className="nav-item" style={{padding: '0px 50px 0px 50px',cursor:"pointer"}}className="navLiLink">
          <Link to="/list">View Products</Link>
        </li>
        <li className="nav-item" style={{padding: '0px 50px 0px 50px',cursor:"pointer"}}className="navLiLink">
          <Link to="/edit">Actions</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}
export default HomePage;