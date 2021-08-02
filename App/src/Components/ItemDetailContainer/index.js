import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetailContainer = ({id,title,image,price,description}) => {
    // console.log(id,title,url);
    return (
        
        <div >
            <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
            <p>{title}</p>
            <p>Precio: ${price}</p>
            <p>Descripcion: {description}</p>
            <ItemCount  stock={5} initial={1} />
        </div>

       
    )
}
export default ItemDetailContainer