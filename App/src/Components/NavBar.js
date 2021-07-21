import CartWidget from "./CartWidget"



const NavBar = () =>
    <>
        <title>Smart</title>
        {/* <!-- As a link --> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Smart</a>
                <div>
                    <a className="navbar-brand " href="#"><CartWidget />  Tienda</a>
                    <a className="navbar-brand" href="#">Nosotros</a>
                    <a className="navbar-brand" href="#">Contacto</a>

                </div>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div> */}
                {/* </div> */}
            </div>
        </nav>
        


        {/* <!-- As a heading --> */}

    </>

export default NavBar