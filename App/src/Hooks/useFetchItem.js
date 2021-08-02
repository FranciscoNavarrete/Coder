import { useEffect, useState } from "react"
import { getItem } from '../Helpers/getItem'


export const useFetchItem = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getItem(category)
        .then(datos=>{
            setTimeout(() => {
                setstate({
                    data: datos,
                    loading:false
                })
                
            }, 3000);
        })
    },[category])

    // setTimeout(() => {
    //     setstate({
    //         data:[1,2,3,4,5,6],
    //         loading:false
    //     })
    // }, 2000);
    return state;
}