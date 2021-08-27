import ItemDetail from "../ItemDetail";
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { firestore } from "../Firebase";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
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

                setItem(resultado_parseado[0]);
            })
     },[])
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;