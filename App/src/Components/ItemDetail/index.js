import React, { useEffect, useState } from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import Row from 'react-bootstrap/Row'
import {useParams} from 'react-router-dom'


const ItemDetail = () => {

    const {id} = useParams();
    const [item,setItem]=useState([]);
    useEffect(()=>{
        obtenerItem()
        setItem({
            loading:false
        })
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
            <h3>-${item.price}- </h3>
            <img src={item.image}  width="150" height="150" alt="thumbnail" />
            <hr/>
            <p>{item.description}</p>
        </div>
        </>
    )
}
export default ItemDetail