import { useEffect, useState } from "react";
import { firestore } from "../Firebase";
import Item from "../Item";
import ItemList from "../ItemList";
import IsLoading from "../loading/IsLoading";
const ItemListContainer = (  ) => {
    
    const [items, setItems] = useState([])
    const [status, setStatus] = useState("pending");
    
      useEffect(()=>{
            setStatus("pending");
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
                    setStatus("success");
                })
                setItems(resultado_parseado);

            })
     },[])
     if (status === "pending") return <IsLoading />;
    return (
        <div >
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer


