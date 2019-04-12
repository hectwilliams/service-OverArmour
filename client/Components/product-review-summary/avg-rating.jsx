import React from 'react';
import Stars from '../shared/stars';
import ProductReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css';
import FilterSummary from '../css-modules/css-filter-review/FilterReview.module.css';

var AvgRating = (props) => (

  <div className={ProductReviewSummary["col-1-review-summary"]}>
    <label>Average Rating:</label>
    <div className={FilterSummary['medium']}>
      <Stars
      release = {true}
      fetch = {()=>{}}
      reset = {()=>{}}
      stars = {Math.round(props.stars)}/>
    </div>
    <div className={FilterSummary['medium']}> { props.stars !== undefined ? Math.round(props.stars) : 0} out of 5</div>
  </div>

);
export default AvgRating;