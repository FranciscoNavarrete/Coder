import React from 'react'
import Card from 'react-bootstrap/Card'

const ItemDetailList = ({id,title,image,price,description}) => {
    return (
        <>
            <Card className="card"  border="primary" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Img  variant="button" src={image}></Card.Img>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Precio: ${price}
                    </Card.Text><Card.Text>
                        Descripcion: ${description}
                    </Card.Text>
            </Card>
            
            
       </>
    )
}
export default ItemDetailList