import React,{useState} from 'react';

const initial={
    name:"",email:"",number:""
}


const Crud = () => {
 
    const[arry,setArry]=useState(initial)
    const[record,setRecord]=useState([])
    const[listData,setListData]=useState()
    const[data,setData]=useState(false)

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setArry({...arry,[name]:value})
        // setArry(initial)
    }
    console.log("Inputvalue:",arry);

    const Click=(e)=>{
        e.preventDefault();
        const newdata={...arry}
        console.log('newdata',newdata);
        setRecord([...record,newdata])
        localStorage.setItem("Click Data--->",JSON.stringify([...record,newdata]));
        console.log("Click Data--->",JSON.stringify([...record,newdata]));
        setArry(initial)    
    }
    const Edit=(it,list)=>{
        setArry(it)
        console.log("hmdgsf",it);
        console.log("hmdgsf222",list);

        setData(true)
        setListData(list)
    }
    const finaledit=()=>{
        const data=listData;
        const displaydata=record;
        const set=arry
        displaydata[data]={...set}
        localStorage.setItem("Click Data--->",JSON.stringify(displaydata))
        setData(false);
        setArry(initial)

    }
    const Delete=(id)=>{
        const delData=record;
        delData.splice(id,1)
        localStorage.setItem("Click Data--->",JSON.stringify(delData))
        setRecord([...delData])
    }
    return (
        <div>
            <div>
                <label>Username:</label>
                <input type='text' name='name' value={arry?.name} onChange={(e)=>handleChange(e)} /><br/><br/>
                <label>Email:</label>
                <input type='email' name='email' value={arry?.email} onChange={(e)=>handleChange(e)} /><br/><br/>
                <label>Number:</label>
                <input type='number' name='number' value={arry?.number} onChange={(e)=>handleChange(e)} /><br/><br/>
                <label>Image:</label>
                <input type='file' name='image' onchange={(e)=>handleChange(e)} />
                {data?(<><button onClick={()=>finaledit()}>Update</button></>):(<><button onClick={(e)=>Click(e)}>Submit</button></>)}
                
            </div>
            <table border='1px'>
                <thead>
                    <th>Name</th>
                    <th>email</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {console.log("arrrrr",localStorage?.getItem("Click Data--->"))}
                    {   record?.map((item,ii)=>{
                        // JSON.parse(localStorage?.getItem("Click Data--->"))?.map((item,i)=>{
                            return(
                                <tr key={ii}>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.number}</td>
                                    <td><button onClick={()=>Edit(item,ii)}>Edit</button></td>
                                    <td><button onClick={()=>Delete(ii)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Crud;
