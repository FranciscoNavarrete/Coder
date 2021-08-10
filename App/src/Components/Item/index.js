import React from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import ItemList from '../ItemList'

const Item = ({ category }) => {
    const {data,loading} = useFetchItem(category);
    console.log(data)
    return ( 
        <div className="container  ">
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="row">
                {
                    data.map((img) => (
                        
                            <ItemList key={img.id} {...img} />
                            ))
                }
            </div>
        </div>
    )
}
export default Item