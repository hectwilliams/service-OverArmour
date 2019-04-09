import React from 'react';
import Stars from '../shared/stars';

var AvgRating = (props) => (

  <div className="col-1-review-summary">
    <label>Average Rating:</label>
    <div className='medium'>
      <Stars stars = {Math.round(props.stars)}/>
    </div>
    <div className='medium'> { props.stars !== undefined ? Math.round(props.stars) : 0} out of 5</div>
  </div>

);
export default AvgRating;