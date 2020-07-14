import React from 'react'

import { Product } from './Product'
import styles from './Products.module.css'
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
    <div className={styles.products}>
      {products.map(({ id, ...plan }) => (
        <Product key={id} {...plan} isFeatured={id === featuredProduct} />
      ))}
    </div>
  )
}
