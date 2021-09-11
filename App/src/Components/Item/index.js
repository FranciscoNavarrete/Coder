import { Link } from "react-router-dom"
const Item = ({item}) => {
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