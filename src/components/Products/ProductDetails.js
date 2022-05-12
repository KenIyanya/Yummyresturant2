<<<<<<< HEAD
import React from 'react'

import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import FriedRice from "../../images/image 2.jpg"
import { Button } from 'react-bootstrap'
const ProductDetails = ({foods}) => {

  const {name, price} = useParams()
  return (
   <div>
    
    
     
      <div className='card-detail'>
        
      <Link to = "/Products">
           <Button className = 'button button-a button-small button-rouded'>Back</Button>
      </Link>
       <div className='card-detail-images'>
      <img src={FriedRice} />
      
    </div>
    <div className='card-detail-value'>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
    </div>
   </div>
   
  )
}

=======
import React from 'react'
import Navbar from '../Navbar/navbar'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import FriedRice from "../../images/image 2.jpg"
import { Button } from 'react-bootstrap'
const ProductDetails = ({foods}) => {

  const {name, price} = useParams()
  return (
   <div>
     <Navbar />
     <Link to = "/Products">
           
             <Button>Back</Button>
            </Link>
     
      <div className='card-detail'>
        
      
       <div className='card-detail-images'>
      <img src={FriedRice} />
      
    </div>
    <div className='card-detail-value'>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
    </div>
   </div>
   
  )
}

>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default ProductDetails