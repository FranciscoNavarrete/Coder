import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

// const ItemCount = ({ value = 10 }) => {
    const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);
    const [stockTotal, setstockTotal] = useState(stock);


    const confirmar=()=>{
        // console.log("Confirmar Compra");
        if(stock>0){
            onAdd(counter);
            console.log("Este es el boton agregar al carrito");
        }
    }
    // console.log(nombre, setNombre);
    //handledAdd
    //DOS MANERAS PARA MANEJAR EL COUNTER
    const itemAdd = () => {
        //setCounter((c) => c + 1);
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
        if(counter <= 1){
            console.warn("El valor no puede ser 0")
        }else{
                setCounter(counter-1)
                setstockTotal(stockTotal +1)
        }
    }
    return (
        <>
            <Card  style={{ width: '15rem' }}>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Button onClick={itemSubstract} variant="dark" id="button-addon1">-</Button>
                        <FormControl className="text-center" placeholder={(counter)} disabled
                        />
                        <Button onClick={itemAdd} variant="dark" id="button-addon2">+</Button>
                    </InputGroup>
                    
                </Card.Body>
                <Button onClick={confirmar}variant="dark">Agregar a carrito</Button>
            </Card>
        </>
    )
}
export default ItemCount;