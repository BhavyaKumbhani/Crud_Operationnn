import React, { useEffect, useState } from 'react';

const Apifetch = () => {
    const [data,setData]=useState();
    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/user?created=1
        `)
        
          .then((response) => {
            console.log("response",response.json);
           return response.json
          })
          .then((actualData) => {
            console.log("actualData",actualData);
            setData(actualData);
           
          })
      }, []);
    return (
            
    <div className="App">
      <h1>API Posts</h1>
      <ul>
        {
          data?.map(({ id, titlee }) => {
            <li key={id}>
              <h3>{titlee?.name}</h3>
            </li>
})}
      </ul>
    </div>
    );
}

export default Apifetch;
