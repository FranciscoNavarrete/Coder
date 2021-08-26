import Cart from "./Components/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import ListCategoriesContainer from "./Components/ListCategoriesContainer";
import { Contacto } from "./pages/Contacto";


const rutas = [
    {path:'/item/:id',componente:ItemDetailContainer },
    {path:'/cart', componente:Cart, exact:true},
    {path:'/Categories/:category',componente:ListCategoriesContainer },
    {path:'/Contacto',componente:Contacto },
    {path:'/',componente:ItemListContainer ,exact:true }
];

export default rutas