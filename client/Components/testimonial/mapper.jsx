import React from 'react';
import UserData from '../testimonial/user-data';
import UserInfo from '../testimonial/user-info';
var Mapper = (props) => (
  <div className="testimonial">
    <UserInfo info = {props.dbData} />
    <UserData static = {props.dbStatic} info = {props.dbData} />
  </div>
);
export default Mapper;