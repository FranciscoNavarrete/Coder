import React, { useContext, useEffect, useState } from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import Row from 'react-bootstrap/Row'
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ItemCount from '../ItemCount'
import {CartContext} from '../../Context/CartContext'
import { Link } from "react-router-dom"
import { firestore } from '../Firebase'
import Item from '../Item'

const ItemDetail = () => {

     const [showCounter, setShowCounter] = useState(true)

    const { addItem } = useContext(CartContext)
    const [items, setItems] = useState([])
    // const [item, setItem] = useState([])
    // setItem(items)



    const handleOnAdd = quantity => {
        setShowCounter(false)
        addItem(items, quantity)
        console.log("handle add",items);
    }
    
    // const {id} = useParams();
    // console.log(id)
    // console.log(items)
    // const [item,setItem]=useState([]);
    // const loading = true;
    // useEffect(()=>{
    //     obtenerItem()
        
    // },[])
    // const obtenerItem = async ()=>{
    //     const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    //     const prod = await data.json()
    //     setItem(prod)
    // }

    const mensaje = (item) =>{
        console.log("Se agrego al carrito");
    }
    // const [items, setItems] = useState([])
    
    const {id} = useParams();
      useEffect(()=>{
            const db = firestore;
            const collection = db.collection("productos")
            const query = collection.get()
            query.then((resultados)=>{

                const resultado_parseado = [];

                resultados.forEach((documento)=>{
                    if(documento.id == id)
                    {const id = documento.id;
                    const data = documento.data();
                    const data_final = {id,...data}
                    resultado_parseado.push(data_final);}
                })
                
                setItems(resultado_parseado);

            console.log("Mi resutaldo filtrado",items)
                
            })
     },[])
        
    return (
        <>
                {
                items.map((img) => (
                    <div>
                        
                        <div xs={6} md={4} className="container">
                            <h1>{img.title}</h1>
                            <hr />
                            <img src={img.image} width="150" height="150" alt="thumbnail" />
                            <h3>-${img.price}- </h3>
                            <hr />
                            <p>{img.description}</p>
                             { showCounter && <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/> }  
                            <Link to="/cart">
                                 <button onClick={handleOnAdd,mensaje}>Finalizar compra</button> 
                            </Link>


                            {/* <ItemCount stock={5} initial={0}/> */}
                        </div>
                    </div>
                ))
                }
         
        </>
    )
}
export default ItemDetail
