import { useEffect, useState } from "react"
import getAllCategories from "../Helpers/getAllCategories";

export const useFetchCategories = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getAllCategories(category)
        .then(datos=>{
                setstate({
                    data: datos,
                    loading:false
                })
        })
    },[category])
    return state;
}