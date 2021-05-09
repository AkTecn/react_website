import React from 'react';
function Card(Props) {
    
return(


<div className="card">
 <div className="card">
 <img src={Props.imgsrc}
  alt="mypic" className="card__img" />
  <div className="card__info">
  <span className="card__category">{Props.tittle} </span>
  <h3 className="card__tittle">{Props.sname}</h3>
  <a href={Props.link}
   target="blank">
      <button>watch now</button>
  </a>

  </div>

 </div>

</div>
);
}
export default Card;