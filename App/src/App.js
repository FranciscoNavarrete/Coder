import NavBar from "./Components/NavBar"
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Contacto from "./pages/Contacto";
import Cart from "./pages/Cart";

    
    const onAdd=(cantidad)=>{
        console.log(cantidad)
    }
    const App = () => {
        // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]
        
        return (
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/Contacto" component={Contacto}/>
                    <Route path="/Cart" component={Cart}/>
                    <Route path="/categories/electronics" component={ItemListContainer} />
                    <Route path="/categories/jewelery" component={ItemListContainer} />
                    <Route path="/categories/men-clothing" component={ItemListContainer} />
                    <Route path="/categories/women-clothing" component={ItemListContainer}/>
                    <Route path="/"component={ItemListContainer}/>
                </Switch>
            </BrowserRouter>
            
        )
    }

   

export default App