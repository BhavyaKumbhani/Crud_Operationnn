import React, { useState } from 'react';
const Home = (props) => {
    console.log("propppppppp",props);
    const[show,setShow]=useState(false)
    return (
        <>
        <div>           
            
            {
                show ? (<div><h1>Home</h1><br/>WELCOME!!!!</div>):null
            }<br/>
            <button onClick={()=>setShow(!show)}>{show?'OFF':'ON'}</button>
            </div>
            {props.email}{props.name}
        </>
    );
}

export default Home;
