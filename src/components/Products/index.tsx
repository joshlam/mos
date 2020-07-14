import React from 'react'

import { Product } from './Product'
import { IProduct } from '../../mockData'

interface IProductsProps {
  products: IProduct[]
  featuredProduct?: string
}

export const Products: React.FC<IProductsProps> = ({
  products,
  featuredProduct,
}) => {
  return (
    <ul>
      {products.map(({ id, ...plan }) => (
        <Product key={id} {...plan} isFeatured={id === featuredProduct} />
      ))}
    </ul>
  )
}
