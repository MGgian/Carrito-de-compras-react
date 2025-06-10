import { useContext, useEffect, useState } from "react"
import { CardComponent } from "../components/CardComponent"
import { CartContext } from "../context/CartContext"
import { ProductContext } from "../context/ProductContext"




export const ProductsPage = () => {



  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CartContext)
  


  return(
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(product => (
        <CardComponent
        key={product.id} // <- aquí debe estar la key única
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        handlerAdd={()=> addProduct(product)}
        handlerRemove={() => removeProduct(product.id)}
        />
      ))}
    </>
  )
  
  
}
