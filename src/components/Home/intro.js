<<<<<<< HEAD
import React from 'react'
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import carousel1 from '../Home/carou1.jpg';
import carousel2 from '../Home/carou2.jpg';
import carousel3 from '../Home/carou3.jpg';



 const Home = () => {
   return(
     <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carousel1} class="d-block w-100" alt="..."></img> 
            </div>
            <div class="carousel-item">
              <img src={carousel2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={carousel3} class="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>




       {/* <div className='home'>
       <h3>Welcome to</h3>
       <h1>SH 97</h1>
       <h2>HOTEL</h2>
       </div> */}
       
       
     </div>
     
   )
 }

=======
import React from 'react'
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import carousel1 from '../Home/carou1.jpg';
import carousel2 from '../Home/carou2.jpg';
import carousel3 from '../Home/carou3.jpg';



 const Home = () => {
   return(
     <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carousel1} class="d-block w-100" alt="..."></img> 
            </div>
            <div class="carousel-item">
              <img src={carousel2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={carousel3} class="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>




       {/* <div className='home'>
       <h3>Welcome to</h3>
       <h1>SH 97</h1>
       <h2>HOTEL</h2>
       </div> */}
       
       
     </div>
     
   )
 }

>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
 export default Home