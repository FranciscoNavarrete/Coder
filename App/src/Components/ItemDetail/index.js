import React, { useContext, useEffect, useState } from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import Row from 'react-bootstrap/Row'
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ItemCount from '../ItemCount'
import CartContext from '../../Context/CartContext'
import { Link } from "react-router-dom"

const ItemDetail = () => {

    const [showCounter, setShowCounter] = useState(true)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = quantity => {
        setShowCounter(false)
        addItem(item, quantity)
        console.log("handle add",item);
    }
    
    const {id} = useParams();
    const [item,setItem]=useState([]);
    const loading = true;
    useEffect(()=>{
        obtenerItem()
        
    },[])
    const obtenerItem = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const prod = await data.json()
        setItem(prod)
    }
        
    return (
        <>
        <div className="container">  
            <h1>{item.title}</h1>
            <hr/>
            <img src={item.image}  width="150" height="150" alt="thumbnail" />
            <h3>-${item.price}- </h3>
            <hr/>
            <p>{item.description}</p>
            { showCounter && <ItemCount initial={1} stock={5} onAdd={ handleOnAdd }/> }
            <Link to="/cart">
                <button onClick={handleOnAdd}>Finalizar compra</button>
            </Link>
            {/* <ItemCount stock={5} initial={0}/> */}
        </div>
        </>
    )
}
export default ItemDetail