import NavBar from "./Components/NavBar"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rutas from "./route-config";
import CustomProvider, { CartContextProvider } from "./Context/CartContext";

const App = () => {

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