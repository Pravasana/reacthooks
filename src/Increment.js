import React,{useState} from 'react'


const Increment = () => {
    const [count,setCount]=useState(0)
    //const increase()=>{
    //     setCount(count+1)
    // }
    return (
        <>
            <h1>{count}</h1>
           {count<50 && <button onClick={()=> setCount(count+1)}>Click to increase value</button>}
            {/* <button onClick={()=>count>0 && setCount(count-1)}>Click to decrease value</button>  */}
           {count>0 && <button onClick={()=> setCount(count-1)}>Click to decrease value</button> }
            
            
        </>
    )
}

export default Increment
