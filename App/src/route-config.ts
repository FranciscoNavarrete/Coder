import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import ListCategoriesContainer from "./Components/ListCategoriesContainer";
import { Contacto } from "./pages/Contacto";


const rutas = [
    {path:'/ItemDetail',componente:ItemDetailContainer },
    {path:'/Categories/:category',componente:ListCategoriesContainer },
    {path:'/Contacto',componente:Contacto },
    {path:'/',componente:ItemListContainer ,exact:true }
];

export default rutas