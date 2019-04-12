import React from 'react';

import FilterReviewCss from  '../css-modules/css-testimonial/Testimonial.module.css';


var NullStars = (props) => (
  <div>
    <i className = {`${FilterReviewCss['disable-dom']} fa fa-star`}></i>
    <i className = {`${FilterReviewCss['disable-dom']} fa fa-star`}></i>
    <i className = {`${FilterReviewCss['disable-dom']} fa fa-star`}></i>
    <i className = {`${FilterReviewCss['disable-dom']} fa fa-star`}></i>
    <i className = {`${FilterReviewCss['disable-dom']} fa fa-star`}></i>
    <span> <strong>  {props.subject}   </strong>  </span>
  </div>
);
export default NullStars;