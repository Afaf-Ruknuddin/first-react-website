import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () =>{
    const [Img, setImg] = useState('');
    const inputEvent = (event)=>{
        const data =event.target.value;
        console.log(data);
        setImg(data)
    }
    return(
        <>
        <div className='searchbar'>
            <input type='text' placeholder='search anything' value={Img} onChange={inputEvent}/>
        </div>
        <Sresult name={Img}/>
        </>
    )
}

export default Search