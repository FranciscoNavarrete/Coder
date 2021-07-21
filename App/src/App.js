import Header from "./Header";

const App = () => {
    const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]

    return (
        <header>
            <Header test test2 nombre="Fran" edad={27} usuarios={usuarios}>
                <p>Hola...</p>
            </Header>
        </header>
    )
}
export default App