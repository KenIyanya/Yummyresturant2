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

export default ProductDetails