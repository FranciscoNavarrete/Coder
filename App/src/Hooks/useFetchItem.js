import { useEffect, useState } from "react"
import { getAllItem } from '../Helpers/getAllItem'
import { firestore } from "../Components/Firebase/index"
import { Collapse } from "react-bootstrap";


export const useFetchItem = (category) => {

    
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    useEffect(()=>{
        getAllItem(category)
        .then(datos=>{
                setstate({
                    data: datos,
                    loading:false
                })
            })
            
    },[category])

    
    return state;
}