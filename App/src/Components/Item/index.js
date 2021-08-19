import React from 'react'
import { useFetchItem } from '../../Hooks/useFetchItem'
import ItemList from '../ItemList'
import Spinner from 'react-bootstrap/Spinner'

const Item = ({ category }) => {
    const { data, loading } = useFetchItem(category);
    

    return (
        <div className="container  ">
            {loading && <p>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden loading"></span>
                </Spinner></p>}

            <div className="row">
                {
                    data.map((img) => (

                        <ItemList key={img.id} {...img} />
                    ))
                }
            </div>
        </div>
    )
}
export default Item