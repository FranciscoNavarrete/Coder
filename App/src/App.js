import NavBar from "./Components/NavBar"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rutas from "./route-config";
import { CartContextProvider } from "./Context/CartContext";
const onAdd = (cantidad) => {
    console.log(cantidad)
}
const App = () => {
    // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]

    return (
         <CartContextProvider value={3}>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    {rutas.map(ruta =>
                        <Route
                            key={ruta.path}
                            path={ruta.path}
                            exact={ruta.exact}>
                            <ruta.componente />
                        </Route>)}
                </Switch>
            </BrowserRouter>
         </CartContextProvider>

    )
}



export default App