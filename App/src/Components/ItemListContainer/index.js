import { useEffect, useState } from "react";
import { firestore } from "../Firebase";
import Item from "../Item";
import ItemList from "../ItemList";
const ItemListContainer = (  ) => {
    
    const [items, setItems] = useState([])
    
      useEffect(()=>{
            const db = firestore;
            const collection = db.collection("productos")
            const query = collection.get()
            query.then((resultados)=>{

                const resultado_parseado = [];

                resultados.forEach((documento)=>{

                    const id = documento.id;
                    const data = documento.data();
                    const data_final = {id,...data}
                    resultado_parseado.push(data_final);

                })
                setItems(resultado_parseado);
            console.log(resultado_parseado)

            })
     },[])
    return (
        <div >
            {/* //hice cambio aca */}
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer


