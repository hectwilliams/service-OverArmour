import React from 'react';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css';

var UserInfo = ({info}) => (
  <div className={Testimonial["testimonial-user-who"]}>
    <ul className={Testimonial["list"]}>
    {!info.user ? '' :  <li>  <strong> Posted by: </strong>{info.user}</li>}
    {!info.date ? '' :   <li>  <strong> Date: </strong>{info.date.slice(0,10)} </li>}
    {!info.gender ? '' :   <li>  <strong> Gender : </strong> {info.gender}  </li>}
    {!info.athleteType ? '' :   <li>  <strong> Athlete Type : </strong> {info.athleteType}  </li>}
    {!info.sportsInterest ? '' :   <li>  <strong> Sport Interest : </strong> {info.sportsInterest}  </li>}
    {!info.height ? '' :   <li>  <strong> Gender : </strong> {info.height}  </li>}
    {!info.sizePurchased ? '' :   <li>  <strong> Size Purchased : </strong> {info.sizePurchased}  </li>}
    </ul>
  </div>
);
export default UserInfo;