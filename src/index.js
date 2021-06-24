import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Apps';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
   <>
    <BrowserRouter>
        <Apps/>
    </BrowserRouter> 
   </>
     ,document.getElementById('root'));
