import React from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import ItemList from '../ItemList'

const Item = ({ category }) => {
    const {data,loading} = useFetchItem(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card">
                {
                    data.map((img) => (
                            <ItemList {...img} />
                            ))
                }
            </div>
            
        </>
    )
}
export default Item