import React from 'react';
import SData from './SData';
import Card from './Card';

const Prime =()=>{
    return(
        <>
        <Card
            key={SData[4].id} 
            imgsrc={SData[4].imgsrc}
            title={SData[4].title}
            sname={SData[4].sname}
            link={SData[4].link}
           />

        <Card
            key={SData[3].id} 
            imgsrc={SData[3].imgsrc}
            title={SData[3].title}
            sname={SData[3].sname}
            link={SData[3].link}
           />
           </>
    );
}

export default Prime;

