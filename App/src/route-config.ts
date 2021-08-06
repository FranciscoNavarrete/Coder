import ItemListContainer from "./Components/ItemListContainer";
import { Cart } from "./pages/Cart";
import Categories from "./pages/Categories";
import { Contacto } from "./pages/Contacto";


const rutas = [
    {path:'/Categories/:ca',componente:Categories },
    {path:'/Contacto',componente:Contacto },
    {path:'/Cart',componente:Cart },
    {path:'/',componente:ItemListContainer ,exact:true }
];

export default rutas