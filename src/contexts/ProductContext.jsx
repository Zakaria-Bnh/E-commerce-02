import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setproducts ] = useState([])
    const productsUrl = 'https://fakestoreapi.com/products'

    useEffect(() => {
        axios.get(productsUrl).then(response => {
          const filteredData = response.data.filter(item => {
            return item.category === "men's clothing" || item.category === "women's clothing"
          })
            setproducts(filteredData)
        })
        .catch(error => console.error(error))
        
    },[])

  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider