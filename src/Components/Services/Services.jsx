import React from 'react';
import './Services.scss';


const Services = (props) => {
  return (
    <div>
   
         <div className="card">
      <div className="card__body">
      <h2 className="card__title">{props.title}</h2>
        {/* <p className="card__description">{props.description}</p> */}
        <img src={props.img} class="card__image" alt='' />
       
        </div>
        <button className="card__btn">Find out more</button>
    </div>
 
    </div>
  )
}

export default Services

     
