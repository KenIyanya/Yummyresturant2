import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Features from './components/Home/Features';

import About from './components/About/About';
import Navbar from'./components/Navbar/navbar';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';


import FriedRice from '../src/images/image 1.jpg'
import Image2 from '../src/images/image 2.jpg'
import Image3 from '../src/images/image 3.jpg'
import Image4 from '../src/images/image 4.jpg'
import Image5 from '../src/images/image 5.jpg'
import Image6 from '../src/images/image 6.jpg'
import Image7 from '../src/images/image 7.jpg'
import Image8 from '../src/images/image 8.jpg'
import Image9 from '../src/images/image 9.jpg'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import ProductDetails from './components/Products/ProductDetails';


function App() {
  const foods = [
    {id: 1, foodname: 'FriedRice', image: FriedRice, price: '$4'},
    {id: 2, foodname: 'FriedRice and Plantain', image: Image2, price: '$6'},
    {id: 3, foodname: 'Pounded yam', image: Image3, price: '$8'},
    {id: 4, foodname: 'Soup', image: Image4, price: '$6'},
    {id: 5, foodname: 'Vegitable', image: Image5, price: '$4'},
    {id: 6, foodname: 'Chiken soup', image: Image6, price: '$6'},
    {id: 7, foodname: 'FriedRice', image: Image7, price: '$4'},
    {id: 8, foodname: 'FriedRice', image: Image8, price: '$6'},
    {id: 9, foodname: 'Semovita', image: Image9, price: '$6'}
  ]

  return (
    <div className="container-fluid">
     <BrowserRouter>
     <Navbar />

        <Routes>
      
           <Route path="/" element={<Home />} Products foods = {foods} />

          <Route path='/about' element={<About />} />

          <Route path="/products" element={<Products foods = {foods} />} />
         

          <Route path="/products/:name/:price" element={<ProductDetails foods = {foods} />} />

          <Route path ='/contact' element={<Contact />} />

        </Routes>
      
       
      
        <Footer />

     </BrowserRouter>
    </div>
  );
}

export default App;
