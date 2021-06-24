import React, {useEffect ,useState } from 'react' ;
import axios from 'axios';

const CompA =()=>{

    const [Num,SetNum]=useState();
    const [name,SetName]=useState();
    const [moves,SetMoves]=useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`);
            console.log(res);
            SetName(res.data.name)
            SetMoves(res.data.moves.length)
    }
        getData()
    })

    return( 
    <>
    <h1>you have selected <span style={{color:'red'}}> {Num} </span></h1>
    <h1>my name is  <span style={{color:'red'}}>{name}</span></h1>
    <h1>i have <span style={{color:'red'}}>{moves}moves</span></h1>

      <select value={Num} onChange={(event)=>{
            SetNum(event.target.value);
      }}>
          <option value='1'>1</option>
          <option value='25'>25</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
      </select> 
      </>
    )
}

export default CompA;