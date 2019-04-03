import React from 'react';
import Stars from '../shared/stars';

var AvgRating = (props) => (
  <div className="col-1-review-summary">
    <label>Average Rating:</label>
    <div className='medium'>  <Stars/> </div>
    <div className='medium'>   { !props.avg ? '-1': props.avg }out of 5</div>
  </div>

)
export default AvgRating;