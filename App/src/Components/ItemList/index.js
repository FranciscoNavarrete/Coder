import ItemCount from '../ItemCount'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"


const ItemList = ({id,title,image,price,description}) => {
    console.log("Ite List",id);
    return (
        <Card className= "container col-4 row-3">
            <div className= "container">
            <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
            <p text-align="center">{title}</p>
            </div>
            <div className= "container-fluid">
            <Link  to={`/itemDetail/${id}`} >Ver más...</Link>
            <ItemCount  stock={5} initial={0} />
            </div>
        </Card>
    )
}
export default ItemList