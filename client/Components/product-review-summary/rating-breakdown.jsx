import React from 'react';

import percent from '../css-modules/css-ratings/Rating.module.css';
import productReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css'
class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={productReviewSummary["col-1-review-summary"]}>
        <label >Rating Breakdown:</label>
        <div className = {productReviewSummary["col-1-review-summary-breadown-entry"]}>
          <div className={productReviewSummary["barEntry"]}>
            <span className={productReviewSummary["skillbar-msg"]}>5 stars  </span>
            <span className={productReviewSummary["initbar"]}>
              <div className = {percent[`percentage-${+ this.props.starBreakdown[5]}`]} ></div>
            </span>
          </div>
          {/* // { 'percentage-' + this.props.starBreakdown[5]} ></div> */}
          <div className={productReviewSummary["barEntry"]}>
            <span className={productReviewSummary["skillbar-msg"]}>4 stars  </span>
            <span className={productReviewSummary["initbar"]}>
            <div className = {percent[`percentage-${+ this.props.starBreakdown[4]}`]} ></div>
            </span>
          </div>

          <div className={productReviewSummary["barEntry"]}>
            <span className={productReviewSummary['skillbar-msg']}>3 stars </span>
            <span className={productReviewSummary["initbar"]}>
            <div className = {percent[`percentage-${+ this.props.starBreakdown[3]}`]} ></div>
            </span>
          </div>

          <div className={productReviewSummary["barEntry"]}>
            <span className={productReviewSummary["skillbar-msg"]}>2 stars  </span>  <span className={productReviewSummary["initbar"]}>
            <div className = {percent[`percentage-${+ this.props.starBreakdown[2]}`]} ></div>
            </span>
          </div>

          <div className={productReviewSummary["barEntry"]}>
            <span className={productReviewSummary["skillbar-msg"]}>1 stars  </span>  <span className={productReviewSummary["initbar"]}>
            <div className = {percent[`percentage-${+ this.props.starBreakdown[1]}`]} ></div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;
