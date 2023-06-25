import React from "react"

const HomePage = () =>{
    return(<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{ background: '#4FC0D0'}}>
    <a  style={{    fontWeight: '500'}}>Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navBarCustom" id="navbarNav" style={{ justifyContent: 'center'}}>
      <ul class="navbar-nav navBarCustom" style={{fontWeight: '500'}}>
        <li class="nav-item" className="navLiLink">
          <a class="nav-link active" aria-current="page" href="#">OnBoard</a>
        </li>
        <li class="nav-item" className="navLiLink">
          <a class="nav-link active" href="#">Products</a>
        </li>
        <li class="nav-item" className="navLiLink">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}
export default HomePage;