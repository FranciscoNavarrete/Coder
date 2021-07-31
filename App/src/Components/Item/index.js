

const Item = ({id, title, price, pictureUrl }) => {
    const arreglo = {
        id: 1,
        title: 'prueba',
        price: 2500,
        pictureUrl: '',
    }
    // console.log(arreglo);  
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(arreglo);
        }, 2000);
    })
    promesa.then((array) => {
        console.log("Este es el then", array);
        console.log('Termino bien la promesa');
        
        
    })
    promesa.catch(() => {
        console.log("Termino la promesa mal")
    });
    function muestraAlgo(){
        setTimeout(() => {
            <p>Que se muestro algo</p>
            
        }, 2000);
    }
    return (
        
        <div className="m-5 col-11 ">
                {muestraAlgo()}
                <p>{arreglo.id}</p>
                <p>{arreglo.title}</p>
                <p>{arreglo.price}</p>
                <p>{arreglo.pictureUrl}</p>
            </div>
    )
}



export default Item
