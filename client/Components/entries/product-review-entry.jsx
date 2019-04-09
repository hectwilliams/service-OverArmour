import React from 'react';
import AvgRating from '../product-review-summary/avg-rating';
import RatingBreakdown from '../product-review-summary/rating-breakdown';
import ReviewSummary from '../shared/review-summary';

class ProductReviewSummaryEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="review-summary-container">
        <div className='ident'></div>
        <AvgRating
          stars = {this.props.avgStats.stars > 5 || this.props.avgStats.stars < 0 ? 0 : this.props.avgStats.stars}
        />
        <RatingBreakdown
          starBreakdown = {this.props.avgStats.histoStars}
        />
        <ReviewSummary
          comfortRate = {Math.floor(this.props.avgStats.size)}
          performRate = {Math.floor( this.props.avgStats.performance)}
          sizeRate = {Math.floor(this.props.avgStats.comfort)}
        />
      </div>

    );
  }
}
export default ProductReviewSummaryEntry;