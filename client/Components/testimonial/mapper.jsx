import React from 'react';
import UserData from '../testimonial/user-data';
import UserInfo from '../testimonial/user-info';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css'

var Mapper = (props) => (
  <div className={Testimonial["testimonial"]}>
    <UserInfo info = {props.dbData} />
    <UserData
      static = {props.dbStatic}
      info = {props.dbData}
      release = {props.release}
    />
  </div>
);

export default Mapper;