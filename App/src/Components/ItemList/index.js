import React from 'react'
import ItemCount from '../ItemCount'
import Card from 'react-bootstrap/Card'

const ItemList = ({id,title,image,price,description}) => {
    // console.log(id,title,url);
    return (
        <Card className="col-3">
            <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
            <p>{title}</p>
            {/* <p>Precio: ${price}</p>
            <p>Descripcion: {description}</p> */}
            <ItemCount  stock={5} initial={1} />
        </Card>
    )
}
export default ItemList