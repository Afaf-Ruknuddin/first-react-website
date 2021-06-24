import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const ToDoList=()=>{
    
    const[item,setItem] =useState('');
    const[newItem,setNewItem] =useState([])

    const itemEvent =(event)=>{
        setItem(event.target.value);
    };

    const listOfItems =()=>{
        setNewItem((prevVal)=>{
            return[...prevVal,item]
        })
        setItem('')
    }

return(
    <>
    <div className='main_div'>
    <div className='center_div'>
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type='text' value={item} placeholder='add items' onChange={itemEvent} />
        <Button className='newBtn' onClick={listOfItems}>
            <AddIcon/>
        </Button>

        <br/>
        <ol>
            {
                newItem.map((val)=>{
                return <li>{val}</li>
            })
            }
        </ol>
    </div>
    </div>
    </>
);
};

export default ToDoList;