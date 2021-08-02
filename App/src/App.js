import NavBar from "./Components/NavBar"
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";


    
    const onAdd=(cantidad)=>{
        console.log(cantidad)
    }
    const App = () => {
        // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]
        
        return (
            <>
               
                <NavBar/>
                <ItemListContainer />
                
                
            </>
            
        )
    }

   

export default App