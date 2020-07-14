import React, { useEffect, useState } from 'react'

import { Product } from './Product'
import styles from './Products.module.css'
import { IProduct } from '../../mockData'
import { DeviceSize, getDeviceSize } from '../../utils'

interface IProductsProps {
  products: IProduct[]
  featuredProduct?: string
}

const productOrdering = (products: IProduct[], featuredProduct?: string) => {
  if (getDeviceSize() === DeviceSize.DESKTOP) return products

  return [...products].sort((productA) => {
    if (productA.id === featuredProduct) return -1

    return 0
  })
}

export const Products: React.FC<IProductsProps> = ({
  products,
  featuredProduct,
}) => {
  const [orderedProducts, setOrderedProducts] = useState(
    productOrdering(products, featuredProduct)
  )

  const reorderProducts = () => {
    setOrderedProducts(productOrdering(products, featuredProduct))
  }

  useEffect(() => {
    window.addEventListener('resize', reorderProducts)

    return () => {
      window.removeEventListener('resize', reorderProducts)
    }
  })

  return (
    <div className={styles.products}>
      {orderedProducts.map(({ id, ...plan }) => (
        <Product key={id} {...plan} isFeatured={id === featuredProduct} />
      ))}
    </div>
  )
}
