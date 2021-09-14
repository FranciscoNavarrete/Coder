import {useContext, useState} from 'react'
import ItemCount from '../ItemCount'
import CartContext from '../../Context/CartContext'
import { Link } from "react-router-dom"


export default function ItemDetail({item}){

    const [showCounter, setShowCounter] = useState(true)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setShowCounter(false)
        addItem(item, quantity)
        console.log(item)
    }
        
    return (
        <div className="container">
        <div className="container">
            <p>{item.title}</p>
            <img src = {item.image}width="150" height="150" text-align ="center" alt="thumbnail"></img>
            <p>Precio: {item.price} </p>
            <p>Descripcion: {item.description} </p>
            {showCounter && <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />}
            {!showCounter &&(
            <Link to="/cart">
            <button >
                Finalizar compra
            </button>
            </Link>
            )}
        </div>
        </div>
    )
}
