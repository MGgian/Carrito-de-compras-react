import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import '../styles/CardComponent.css'


export const CardComponent = ({ id, image, title, description, price, handlerAdd, handlerRemove }) => {

    const { shoppingList } = useContext(CartContext)

    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }
    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }

    const checkAdded = () => {
        const boolean = shoppingList.some(product => product => product.id == id)
        setAdded(boolean)
    }

    useEffect(() => {
      checkAdded()
    
      
    },[])
    

  return (
    <div className="card">

        <img src={image} alt={title} className="card-img"/>

        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>

        {
            added   
                ? <button
                    type="button"
                    className="remove-button"
                    onClick={removeProduct}
                >

                    Quitar del Carrito
                </button>
                : <button
                 type="button"
                 className="add-button"
                 onClick={addProduct}
                 
                >

                    Agregar del Carrito
             </button>
        }

        </div>
    </div>
  )
}
