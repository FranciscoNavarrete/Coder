import { useEffect, useState } from "react"
import { getAllItem } from '../Helpers/getAllItem'


export const useFetchItem = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getAllItem(category)
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