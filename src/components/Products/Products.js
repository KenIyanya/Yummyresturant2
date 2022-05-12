<<<<<<< HEAD
import React from 'react'
import '../Products/Product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Products = ({foods}) => {
  return (
    <div>
     
       <div className='container-fluid'>
      
      <h2 className="text-sm">Products</h2>
      <div className='cards'>
        {
           foods && foods.map((food) => 
           <div className='card-box'>

            <Link to = {`${food.foodname}/${food.price}`}>
            <div className='card-images'>
             <img src={food.image} />
             </div>
             <p>{food.foodname} {food.price}</p>
            
             <Button className = 'button button-a button-small button-rouded'>Oder</Button>
            </Link>
             
             </div>
             )
        }
       
        
      </div>
    </div>

    </div>
    
  )
}

=======
import React from 'react'
import '../Products/Product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'

const Product = () => {

}
const Products = ({foods}) => {
  return (
    <div>
       <Navbar />
       <div className='container-fluid'>
      <h4>Yummy Products< /h4>

      <div className='cards'>
        {
           foods && foods.map((food) => 
           <div className='card-box'>

            <Link to = {`${food.foodname}/${food.price}`}>
            <div className='card-images'>
             <img src={food.image} />
             </div>
             <p>{food.foodname} {food.price}</p>
            
             <Button>Oder</Button>
            </Link>
             
             </div>
             )
        }
       
        
      </div>
    </div>

    </div>
    
  )
}

>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default Products