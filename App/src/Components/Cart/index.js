import { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom";
import Form from "../form/form.js"
import  CartContext from '../../Context/CartContext';

export default function Cart() {
  
    const { items, finalPrice, removeItem } = useContext(CartContext)
    const [successBuy, setSuccessBuy] = useState(false);

    if (items.length === 0 && !successBuy)
    return (
      <>
        <p>No hay items en tu carrito!</p>
        <Link to="/">Volver a inicio</Link>
      </>
    );
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
             <Form onSuccessBuy={()=> setSuccessBuy(true)}/>
         </div>
     )
        
}