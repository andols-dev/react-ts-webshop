import React from 'react'
import {Link} from 'react-router-dom'
import {Products} from '../products'
interface Props {
    products: Products;
}

export const ProductCard: React.FC<Props> = ({products:{title,price,id}}) => {
    
   return (
       <div style={{border: "1px solid"}}>
         {title}
         {id}
         {price}
         <Link to={`/productinfo/${id}`}>view more</Link>

       
       </div>
   )
}