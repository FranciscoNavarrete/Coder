import React from 'react';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
 

const ListCategories = ({id,title,image,price,description}) => {
    // console.log(id,title,url);
    
    return (
        <Card className= "container col-4 row-3">
            <div className= "container">
            <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
            <p text-align="center">{title}</p>
            </div>
            {/* <p>Precio: ${price}</p>
            <p>Descripcion: {description}</p> */}
            <div className= "container-fluid">
            <ItemCount  stock={5} initial={0} />
            </div>
        </Card>
    )
}
export default ListCategories