import React from 'react';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css';

var UserInfo = ({info}) => (
  <div className={Testimonial["testimonial-user-who"]}>
    <ul className={Testimonial["list"]}>
      <li>  <strong> Posted by: </strong>{info.user}</li>
      <li>  <strong>  Date: </strong> {info.date.slice(0,10)}  </li>
      <li>  <strong> Gender: </strong>  {info.gender}  </li>
      <li>  <strong> Athlete Type:</strong>  {info.athleteType}   </li>
      <li>   <strong> Sport Interest:</strong>   {info.sportsInterest} </li>
      <li>   <strong> Height:</strong>   {info.height}   </li>
      <li>   <strong> Size Purchased:</strong>{info.sizePurchased} </li>
    </ul>
  </div>
);
export default UserInfo;