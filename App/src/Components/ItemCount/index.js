import React, { useState } from 'react'
import { Link } from "react-router-dom"


import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

    const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);
    const [stockTotal, setstockTotal] = useState(stock);

    const [stateOnAdd,setStateOnAdd] = useState(0);


    const confirmar=()=>{
        if(stock>0){
            console.log("Agregar al carrito, Tiene que llevar al carrito, con todos los productos por comprar. Llevandolo la cantidad del prod", counter);
        }
    }
    const itemAdd = () => {
        if(stockTotal<=1)
            {console.log("No hay mas stock")}
        if(counter <= stock){
            setCounter(counter +1)
            setstockTotal(stockTotal -1)
        }else{
        }
    }
    const itemSubstract = () =>
    {
        if(counter <= 0){
            console.warn("El valor no puede ser 0")
        }else{
                setCounter(counter-1)
                setstockTotal(stockTotal +1)
        }
    }
    return (
        <div >
            <Card  style={{ width: '15rem' }}>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Button onClick={itemSubstract} variant="dark" id="button-addon1">-</Button>
                        <FormControl className="text-center" placeholder={(counter)} disabled
                        />
                        <Button onClick={itemAdd} variant="dark" id="button-addon2">+</Button>
                    </InputGroup>
                    
                </Card.Body>
                <div className="container-fluid">
                <Link to="/Cart/id">
                <Button  style={{ width: '14rem' }} disabled={!counter>0} className="mb-3" onClick={confirmar}variant="dark">Agregar a carrito</Button>
                </Link>
                </div>
            </Card>
        </div>
    )
}
export default ItemCount;