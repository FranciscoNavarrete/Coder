import ItemListContainer from "./Components/ItemListContainer";
import ListCategoriesContainer from "./Components/ListCategoriesContainer";
import { Cart } from "./pages/Cart";
import { Contacto } from "./pages/Contacto";


const rutas = [
    {path:'/Categories/:category',componente:ListCategoriesContainer },
    {path:'/Contacto',componente:Contacto },
    {path:'/Cart',componente:Cart },
    {path:'/',componente:ItemListContainer ,exact:true }
];

export default rutas