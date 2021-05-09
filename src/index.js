import React from 'react';
import ReactDom from 'react-dom';
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
ReactDom.render(


   <>

<h1 className="heading__style"><span className="ok">List of 10 netflix web series in series 2020</span></h1>

         <Card 
         imgsrc={Sdata[0].imgsrc}
         tittle={Sdata[0].tittle}
         sname={Sdata[0].sname}
         link={Sdata[0].link}
          />
          <Card 
         imgsrc={Sdata[1].imgsrc}
         tittle={Sdata[1].tittle}
         sname={Sdata[1].sname}
         link={Sdata[1].link}
          />
          <Card 
         imgsrc={Sdata[2].imgsrc}
         tittle={Sdata[2].tittle}
         sname={Sdata[2].sname}
         link={Sdata[2].link}
          />
          <Card 
         imgsrc={Sdata[3].imgsrc}
         tittle={Sdata[3].tittle}
         sname={Sdata[3].sname}
         link={Sdata[3].link}
          />
          <Card 
         imgsrc={Sdata[4].imgsrc}
         tittle={Sdata[4].tittle}
         sname={Sdata[4].sname}
         link={Sdata[4].link}
          />
          <Card 
         imgsrc={Sdata[5].imgsrc}
         tittle={Sdata[5].tittle}
         sname={Sdata[5].sname}
         link={Sdata[5].link}
          />
          <Card 
         imgsrc={Sdata[6].imgsrc}
         tittle={Sdata[6].tittle}
         sname={Sdata[6].sname}
         link={Sdata[6].link}
          />
          <Card 
         imgsrc={Sdata[7].imgsrc}
         tittle={Sdata[7].tittle}
         sname={Sdata[7].sname}
         link={Sdata[7].link}
          />
          <Card 
         imgsrc={Sdata[8].imgsrc}
         tittle={Sdata[8].tittle}
         sname={Sdata[8].sname}
         link={Sdata[8].link}
          />
          <Card 
         imgsrc={Sdata[8].imgsrc}
         tittle={Sdata[8].tittle}
         sname={Sdata[8].sname}
         link={Sdata[8].link}
          />
         
         
   </>,
   document.getElementById('root')
);