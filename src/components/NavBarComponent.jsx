import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import '../styles/NavBarComponent.css'



export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext)

  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">MaxiCompras!</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/' className="nav-link" aria-current="page">Productos</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink to='/carrito' className="nav-link" aria-current="page">Carrito</NavLink>
                    </div>
                    
                </div>
                <NavLink className='cart-icon 'to='/carrito'>
                    <Badge badgeContent={ shoppingList.length} color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </NavLink>
            </div>
        </nav> 
    )
}
