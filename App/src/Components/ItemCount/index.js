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
            onAdd(counter);
        }
    }
    const itemAdd = () => {
        
        console.log("stock", stock)
        console.log("counter", counter)

        if(stockTotal>=1)
        if(counter <= stock){
            setCounter(counter + 1)
            setstockTotal(stockTotal -1)
        }else{
        }
        console.log("Cuenta", counter);
    }
    const itemSubstract = () =>
    {
        console.log("stock", stock)
        console.log("counter", counter)
        if(counter <= 0){
            console.warn("El valor no puede ser 0")
        }else{
                setCounter(counter-1)
                setstockTotal(stockTotal +1)
        }
    }

    return (
        <div >
            <Card  style={{ width: '10rem' }}>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Button onClick={itemSubstract} variant="dark" id="button-addon1">-</Button>
                        <FormControl className="text-center" placeholder={(counter)} disabled
                        />
                        <Button onClick={itemAdd} variant="dark" id="button-addon2">+</Button>
                    </InputGroup>
                    
                </Card.Body>
                <div className="container-fluid">
                <Link >
                <Button  style={{ width: '8rem' }} disabled={!counter>0} className="mb-3" onClick={() => onAdd(counter)}variant="dark">Agregar a carrito</Button>
                </Link>
                </div>
            </Card>
        </div>
    )
}
export default ItemCount;