import React from 'react';

var UserInfo = ({info}) => (
  <div className="testimonial-user-who">
  <ul className="list">
    <li>  <strong> Posted by: </strong>{!info? '':info.user}</li>
    <li>  <strong>  Date: </strong> {

     ! info?''
     :info.date.slice(0, info.date.indexOf('T'))

      }  </li>
    <li>  <strong> Gender: </strong>  {
      !info?'' :info.gender
      }  </li>
    <li>  <strong> Athlete Type:</strong>  {!info?'':info.athleteType}   </li>
    <li>   <strong> Sport Interest:</strong>   {!info?'':info.sportsInterest} </li>
    <li>   <strong> Height:</strong>   {!info?'':info.height}   </li>
    <li>   <strong> Size Purchased:</strong>{!info?'':info.sizePurchased} </li>
  </ul>
</div>

);
export default UserInfo;