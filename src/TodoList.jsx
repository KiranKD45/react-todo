import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [value, setValue]= useState("");
    const [listData, setListData] = useState([]);

    function addTask(){
    //   setListData([...listData, value])
    //   console.log(listData);
    if(value!=="")
    setListData((listData)=>{
      const updateList = [...listData, value];
      setValue("");
      return updateList;  
    })
    }
 function removeActivity(i){
 const updatedListData = listData.filter((elem, id)=>{
    return i!= id;
 })
 setListData(updatedListData);
 }

 function removeAll(){
    setListData([])
 }
 

  return (
   <>
   <div className="container">
    <div className="header">
        TODO LIST
    </div>
    <input type="text" placeholder='Enter a To-Do' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={addTask}>Add</button>

    {
        listData!=[] && listData.map((data, i)=>{
            return (
                <>
                <p key={i}>
                    <div>{data}</div>
                   <div> <button onClick={()=>removeActivity(i)}>Delete</button></div>
                    </p></>
            )
        }) 
    }
    {listData.length>=2 && <button onClick={removeAll}>Delete All</button>}
    
   </div>
   </>
  )
}

export default TodoList