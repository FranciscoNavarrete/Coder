import { useEffect, useState } from "react"
import GetAllCategories from "../Helpers/GetAllCategories";


export const useFetchCategories = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        GetAllCategories(category)
        .then(datos=>{
                setstate({
                    data: datos,
                    loading:false
                })
        })
    },[category])
    return state;
}