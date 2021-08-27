import React, { useContext, useEffect, useState } from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import Row from 'react-bootstrap/Row'
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ItemCount from '../ItemCount'
import CartContext from '../../Context/CartContext'
import { Link } from "react-router-dom"
import { firestore } from '../Firebase'
import Item from '../Item'

export default function ItemDetail({item}){

    const [showCounter, setShowCounter] = useState(true)
    console.log("Item DEtail",item.title)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setShowCounter(false)
        addItem(item, quantity)
    }
    
        
    return (
        <>
        <p>{item.title}</p>
        <img src = {item.image}width="150" height="150" text-align ="center" alt="thumbnail"></img>
        <p>Precio: {item.price} </p>
        <p>Descripcion: {item.description} </p>
        {showCounter && <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />}
        </>
    )
}
