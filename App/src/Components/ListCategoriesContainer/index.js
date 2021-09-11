import Categories from "../Categories";
import {useParams} from 'react-router-dom'

const ListCategoriesContainer = (  ) => {
    const {category} = useParams();
    return (
        <div className="container" >
            <h1>Categoria: {category}</h1>
            <Categories category={category}/>
        </div>
    )
}
export default ListCategoriesContainer