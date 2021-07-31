import React, { useEffect, useState } from 'react'
 const loading = ()=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    
    console.log("estado",state);

    return state;
}
export default loading