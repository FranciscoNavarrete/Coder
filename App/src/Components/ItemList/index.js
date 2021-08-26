// import ItemCount from '../ItemCount'
// import Card from 'react-bootstrap/Card'
// import { Link } from "react-router-dom"
// import { useContext, useState } from 'react'
// import CartContext from '../../Context/CartContext'

import Item from "../Item";

// const ItemList = ({id,title,image,price,description}) => {
   
//     const [showCounter, setShowCounter] = useState(true)
//     const [item,setItem]=useState([]);

//     const { addItem } = useContext(CartContext)
    
//     const handleOnAdd = quantity => {
//         setShowCounter(false)
//         addItem(item, quantity)
//         console.log("handle add",item);
//     }
//     return (
//         <Card  className= "container col-4 row-3">
//             <div xs={1} md={2   } className= "container">
//             <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
//             <p text-align="center">{title}</p>
//             </div>
//             <div className= "container-fluid">
//             <Link  to={`/itemDetail/${id}`} >Ver más...</Link>
//             </div>
//             <div>
//             { showCounter && <ItemCount initial={1} stock={5} onAdd={ handleOnAdd }/> }

//             </div>
//             {/* <Link to="/cart">
//                 <button onClick={handleOnAdd}>Finalizar compra</button>
//             </Link> */}
//         </Card>
//     )
// }
// export defaultimport Item from "./Item";
const ItemList = ({items}) => {
    return ( 
        <div id="item-list">
            {items.map(item=>{
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
     );
}
 
export default ItemList;
