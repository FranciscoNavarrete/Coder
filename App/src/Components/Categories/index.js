import React from 'react'
import { useFetchCategories } from '../../Hooks/useFetchCategories'
import ListCategories from '../ListCategories';


const Categories = ({ category }) => {
    const {data,loading} = useFetchCategories(category);
    return ( 
        <div className="container  ">
            {loading && <p>Cargando...</p>}
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