<<<<<<< HEAD
import React from 'react';
import Meat from '../../assets/images/meat.png';
import Features from './Features';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/slicknav.min.css';




const Home = () => {
    return (
        <div>
          
            <div id="home" className="intro route bg-image" style={{backgroundImage: `url(${Meat})`}}>
            
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Welcome to Yummy Restaurant</h1>
                            <p className="intro-subtitle"><span className="text-slider-items">Delicious Meals </span><strong className="text-slider"></strong></p>
                            <p className="pt-3"><a className="button button-a button-small button-rouded js-scroll px-4" href="products" role="button">Browse Shop</a></p>
                        </div>
                    </div>
                </div>
              
            </div>
           
            < Features  />
            
           
        </div>
    );
}
=======
import React from 'react';
import Meat from '../../assets/images/meat.png';
import Features from './Features';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/slicknav.min.css';
import Navbar from '../Navbar/navbar';


const Home = () => {
    return (
        <div>
          <Navbar />
            <div id="home" className="intro route bg-image" style={{backgroundImage: `url(${Meat})`}}>
            
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Welcome to Yummy Restaurant</h1>
                            <p className="intro-subtitle"><span className="text-slider-items">Delicious Meals </span><strong className="text-slider"></strong></p>
                            <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="products" role="button">Browse Shop</a></p>
                        </div>
                    </div>
                </div>
            </div>
            < Features  />
        </div>
    );
}
>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default Home;