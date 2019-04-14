import React from 'react';
import AngryBird from '../product-review-summary/angry-bird';
import ProductReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css'
class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)

    return (
      <div className={ProductReviewSummary["col-2-review-summary"]}>
        {
          ( this.props.labelOff ?''
            : this.props.sizeRate >= 1 || this.props.comfortRate >= 0 || this.props.performRate >= 0) ? <label> Rating Summary
              : </label>
          : ''}

        <div className= {ProductReviewSummary["col-2-review-bars"]}>

          {!this.props.sizeRate ? ''
            :
            <div >
              <small>Size:</small>
              <div className = {ProductReviewSummary["wrapper"]}>
                <div className={ProductReviewSummary["col-2-size-stat"]}>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                  <div className = {ProductReviewSummary["bar"]}> </div>
                </div>
                <AngryBird
                  rate = {this.props.sizeRate}
                />
              </div>
            </div>
          }


          {!this.props.comfortRate ? ''
            :
            <div>
              <small>Comfort:</small>
              <div className = {ProductReviewSummary["wrapper"]}>
              <div className={ProductReviewSummary["col-2-size-stat"]}>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
                </div>
                <AngryBird
                  rate ={this.props.comfortRate }
                />
              </div>
            </div>
          }

          {!this.props.performRate ? ''
            :
            <div>
              <small>Performance:</small>
              <div className = {ProductReviewSummary["wrapper"]}>
              <div className={ProductReviewSummary["col-2-size-stat"]}>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
              <div className = {ProductReviewSummary["bar"]}> </div>
                </div>
                <AngryBird
                  rate ={ this.props.performRate }
                />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}


export default ReviewSummary;