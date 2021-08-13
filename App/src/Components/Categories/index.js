import React from 'react'
import { useFetchCategories } from '../../Hooks/useFetchCategories'
import ListCategories from '../ListCategories';
import Spinner from 'react-bootstrap/Spinner'


const Categories = ({ category }) => {
    const { data, loading } = useFetchCategories(category);
    return (
        <div className="container  ">
            {loading && <p>
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden loading" text-aling="center"></span>
                </Spinner></p>}
            <div className="row">
                {
                    data.map((img) => (
                        <ListCategories key={img.id}{...img} />
                    ))
                }
            </div>
        </div>
    )
}
export default Categories