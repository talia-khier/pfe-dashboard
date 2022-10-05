import React from 'react'
import { products } from '../../__mocks__/products';
import { 
  Box,
  Container,
  Link,
  Typography} from '@mui/material';

export default function ProductDetails(props) {
    const product = products.find(x => x.id === props.id)

  return (
    
    <Container>
      {console.log(product)}
      <h2> {product.title}</h2>
      <Typography>{product.description}</Typography>
      <ul>
          <li>Prix : {product.price} DZD</li>
          <li>Quantité : {product.totalDownloads}</li>

      </ul>
      <img src={product.media} />
    </Container>
    
  )
}
