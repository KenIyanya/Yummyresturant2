<<<<<<< HEAD
import React from 'react'
import '../Navbar/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/slicknav.min.css';


import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>


    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand js-scroll title-left" href="/">Yummy Restaurant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active t" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/about">About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
   
  )
}

=======
import React from 'react'
import '../Navbar/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/slicknav.min.css';

import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>


    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand js-scroll t" href="/">Yummy Restaurant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active t" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/about">About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll t" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
   
  )
}

>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default navbar