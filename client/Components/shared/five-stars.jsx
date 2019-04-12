import React from 'react';
import FilterReviewCss from  '../css-modules/css-testimonial/Testimonial.module.css';
import ProductReviewCss from  '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css';
var FiveStar = (props) => (
  <span>
    <i id='1' className = {`${FilterReviewCss['disable-dom']} fa fa-star ${ProductReviewCss['star']}`}></i>
    <i id='2' className = {`${FilterReviewCss['disable-dom']} fa fa-star ${ProductReviewCss['star']}`}></i>
    <i id='3' className = {`${FilterReviewCss['disable-dom']} fa fa-star ${ProductReviewCss['star']}`}></i>
    <i id='4' className = {`${FilterReviewCss['disable-dom']} fa fa-star ${ProductReviewCss['star']}`}></i>
    <i id='5' className = {`${FilterReviewCss['disable-dom']} fa fa-star ${ProductReviewCss['star']}`}></i>
    <span> <strong>  {props.subject}   </strong>  </span>
  </span>
);
export default FiveStar;