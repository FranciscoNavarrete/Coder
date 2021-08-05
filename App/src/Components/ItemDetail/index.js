import React from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import ItemDetailList from '../ItemDetailList'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ItemDetail = ({ category }) => {
    const { data, loading } = useFetchItem(category);

    return (
        <>
            <h3></h3>
            {loading && <p>Cargando...</p>}

            <Row xs={1} md={2} className="g-4">
                
                    <lu>
                        
                            <ol>
                                {
                                    data.map((img) => (<ItemDetailList {...img} />))
                                }
                            </ol>
                        
                    </lu>
                
                
            </Row>
        </>
    )
}
export default ItemDetail