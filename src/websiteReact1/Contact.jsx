import React from 'react';
import { useState } from 'react';

const Contact = () =>{

    const [Data, setData] = useState({
        fullName:'',
        Phone:'',
        email:'',
        msg:''
    });

    const InputEvent = (event)=>{
        const { name, value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`my full name is ${Data.fullName} , my mobile number is ${Data.Phone} , my Email is ${Data.email} and my message is ${Data.msg}`)
    }

    return (
        <>
       <div className='my-5'>
           <h1 className='text-center'>Contact us</h1>
       </div>
       <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label to="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='fullName' value={Data.fullName} onChange={InputEvent} placeholder="Enter Full Name"/>
                </div>
                <div className="mb-3">
                <label to="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='Phone' value={Data.Phone} onChange={InputEvent} placeholder="Mobile No"/>
                </div>
                <div className="mb-3">
                <label to="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={Data.email} onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label to="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={Data.msg} onChange={InputEvent} rows="3"></textarea>
                </div>
                <div className="col-12">
                     <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;
