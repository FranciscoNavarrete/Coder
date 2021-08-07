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
            setTimeout(() => {
                setstate({
                    data: datos,
                    loading:false
                })
                
            }, 1000);
        })
    },[category])
    return state;
}