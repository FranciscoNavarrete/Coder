import React, { useMemo } from 'react'
import { Table } from 'react-bootstrap'

export const CartList = (item) => {
    console.log(item);
    return (
        <div>
            <Table striped bordered hover>
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
                </Table>
        </div>
    )
}
