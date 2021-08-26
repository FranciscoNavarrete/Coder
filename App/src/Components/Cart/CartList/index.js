import React, { useEffect, useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const CartList = (item) => {
    
    return (
        <div>
            
            <Card>
                <Card.Header as="h5">{item.item.title}</Card.Header>
                <Card.Body>
                    <Card.Title>Cantidad: {item.quantity}</Card.Title>
                    <Card.Text>
                        Precio: {item.item.price}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
                    
            {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <button>delete</button>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{item.item.title}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    </tbody>
                </Table> */}
        </div>
    )
}
