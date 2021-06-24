import React from 'react';
import SData from './SData';
import Card from './Card';

const Netflix =()=>{
    return(
        <>
        <Card
                key={SData[0].id} 
                imgsrc={SData[0].imgsrc}
                title={SData[0].title}
                sname={SData[0].sname}
                link={SData[0].link}
       />
        <Card
                key={SData[1].id} 
                imgsrc={SData[1].imgsrc}
                title={SData[1].title}
                sname={SData[1].sname}
                link={SData[1].link}
       />
        <Card
                key={SData[2].id} 
                imgsrc={SData[2].imgsrc}
                title={SData[2].title}
                sname={SData[2].sname}
                link={SData[2].link}
       />
       </>
    );
}

export default Netflix;

