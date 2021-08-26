// import React from 'react'
// import { useFetchItem } from '../../Hooks/useFetchItem'
// import ItemList from '../ItemList'
// import Spinner from 'react-bootstrap/Spinner'

// const Item = ({ category }) => {
//     const { data, loading } = useFetchItem(category);
    

//     return (
//         <div className="container  ">
//             {loading && <p>
//                 <Spinner animation="border" role="status">
//                     <span className="visually-hidden loading"></span>
//                 </Spinner></p>}

//             <div className="row">
//                 {
//                     data.map((img) => (

//                         <ItemList key={img.id} {...img} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default Item
import { Link } from "react-router-dom"
const Item = ({item}) => {
    console.log("llego el item", item)
    return ( 
        <article className="item">
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.image} width="150" height="150" text-align ="center" alt="thumbnail" />
            <p>{item.description}</p>
            <button>
                <Link to={`/item/${item.id}`}>ver mas...</Link>
            </button>
        </article>
     );
}
 
export default Item;