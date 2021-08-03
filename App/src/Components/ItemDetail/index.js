import React from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import ItemDetailList from '../ItemDetailList'



const ItemDetail = ({ category }) => {
    const {data,loading} = useFetchItem(category);
    
    return (
        <>
        <h3></h3>
            {loading && <p>Cargando...</p>}
            <div > 
                {
                    data.map((img) => (<ItemDetailList {...img} />))
                }
            </div>
        </>
    )
}
export default ItemDetail