import NavBar from "./Components/NavBar"
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import rutas from "./route-config";
    
    const onAdd=(cantidad)=>{
        console.log(cantidad)
    }
    const App = () => {
        // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]
        
        return (
            <>
            <BrowserRouter>
                <NavBar/>
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
            </>
        )
    }

   

export default App