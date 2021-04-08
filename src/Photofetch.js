import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'
const Photofetch = () => {
    const[photos,setPhoto]=useState([])
    const[limit,setLimit]=useState(20)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            console.log(res.data)
            setPhoto(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    
    return (
        <div>
            {photos.slice(0,limit).map(p=>{
                return(
                    <Fragment>
                        <li>{p.title}</li>
                        <p>{p.body}</p>
                    </Fragment>
                )
            }
            )}
            {limit<photos.length &&
              <button style={{backgroundColor:'orange'}} onClick={()=>setLimit(limit+20)}>Load More</button>}
        </div>
    )
}

export default Photofetch
