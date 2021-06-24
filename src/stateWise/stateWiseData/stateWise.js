import React, {useState, useEffect } from 'react'; 
import './stateWise.css';

const Statewise = () => {

    const [Data,setData]=useState([]);

    const getCovidData = async ()=>{
        const res = await fetch('https://api.covid19india.org/data.json') ;
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise)
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
         <div className='container-fluid mt-5'>
             <div className='main_heading'>
             <h1 className='text-center mb-5'> <span className='fw-bold'>Indian</span> COVID 19 Dashboard</h1>
             <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead bg-dark text-light'>
                        <tr className='sticky-top'>
                            <th>state</th>
                            <th>confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Data.map((curElem,ind)=>{
                        return(
                            <tr key={ind}>
                                <th>{curElem.state}</th>
                                <td>{curElem.confirmed}</td>
                                <td>{curElem.recovered}</td>
                                <td>{curElem.deaths}</td>
                                <td>{curElem.active}</td>
                                <td>{curElem.lastupdatedtime}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
             </div>
             </div>
         </div>
        </>
    )
}

export default Statewise
