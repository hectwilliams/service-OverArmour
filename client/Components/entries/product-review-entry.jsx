import React from 'react';
import AvgRating from '../product-review-summary/avg-rating';
import RatingBreakdown from '../product-review-summary/rating-breakdown';
import ReviewSummary from '../shared/review-summary';
import ProductReviewSummary  from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css';

class ProductReviewSummaryEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={ProductReviewSummary["review-summary-container"]}>
        <div className={ProductReviewSummary['ident']}></div>
        <AvgRating
          stars = {!this.props.avgStats.stars ? 0 : this.props.avgStats.stars}
        />
        <RatingBreakdown
          starBreakdown = {this.props.avgStats.histoStars}
        />
        <ReviewSummary
          comfortRate = { parseInt( this.props.avgStats.comfort) }
          performRate = {parseInt( this.props.avgStats.performance) }
          sizeRate = { parseInt (this.props.avgStats.size) }
        />
      </div>

    );
  }
}
export default ProductReviewSummaryEntry;