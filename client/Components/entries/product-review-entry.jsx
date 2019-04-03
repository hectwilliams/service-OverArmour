import React from 'react';
import AvgRating from '../product-review-summary/avg-rating'
import RatingBreakdown from '../product-review-summary/rating-breakdown'
import ReviewSummary from '../shared/review-summary'

class ProductReviewSummaryEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {return(
    <div className="review-summary-container">
    <div className='ident'></div>

      <AvgRating/>
      <RatingBreakdown/>
      <ReviewSummary/>
    </div>

  )}
}
export default ProductReviewSummaryEntry;