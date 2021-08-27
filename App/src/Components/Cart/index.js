import { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import  CartContext from '../../Context/CartContext';

export default function Cart() {
  
    const { items, finalPrice, finalQuantity, addItem, removeItem, clear } = useContext(CartContext)
    console.log("Items que llega",items);
    const item = items[0];
    console.log("items", item)
     return(
         <div>
             {
                 items.map(({ item, quantity }) => (
                    <Card.Body ><div className="container">
                    <strong>{item.title}</strong>
                    <p>Cantidad: {quantity}{" "}</p>
                    <p>Precio: {`US$${item.price * quantity}`}{" "}</p>
                    <button onClick={() => removeItem(item.id)}>
                        {" "}
                        X{" "}
                    </button>
                </div></Card.Body>
                     
                 ))
             }
             <div className="container">
                 <p>Precio Final: <strong>{`US$${finalPrice.toFixed(2)}`}</strong></p>
             </div>
         </div>
     )
        
}