import { useContext } from 'react'
import  CartContextProvider  from '../../Context/CartContext'

export default function Cart() {
    
    const { items } = useContext(CartContextProvider)
    console.log("LLEGA A CART",items);
    
    return (
        <>
            {items.map(item => <div> {item.item.title}: {item.quantity} </div>)}
        </>
    )
}