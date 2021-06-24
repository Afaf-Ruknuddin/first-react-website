import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

// const user =({match})=>{
//     return <h1>i am a {match.params.fname} page</h1>
// }

const User =()=>{
    const { fname, lname } = useParams()
    const location = useLocation()
    const history = useHistory()
    // console.log(location);
    // console.log(history);

    return(
        <>
        <h1>i am a {fname} {lname} page</h1>
        <p>my location is {location.pathname}</p>
        {/* {
            location.pathname === `/user/mohammed/afaf` ?
           ( <button onClick={ ()=>history.goBack()}>click me</button> )
           :null
        } */}
        {
            location.pathname === `/user/mohammed/afaf` ?
           ( <button onClick={ ()=>history.push('/')}>home page</button> )
           :null
        }

        </>
    )
}

export default User;
