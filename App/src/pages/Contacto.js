import React from 'react'
import ItemDetail from '../Components/ItemDetail'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Contacto = () => {
    return (
        <div className="container  ">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <h1></h1>
                        <Card>
                            <h1>Comunicate con nosotros</h1>
                        </Card>
                    </Col>
                ))}
            </Row>
            
            <Card>
                <Card.Header>Smart</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <p>
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                            
                        </p>
                        <p>
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                            
                        </p>
                        <p>
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                            
                        </p>
                        <footer className="blockquote-footer">
                            Smart S.A <cite title="Smart Title"></cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Contacto