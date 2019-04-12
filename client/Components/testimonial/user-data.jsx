import React from 'react';
import ReviewSummary from '../shared/review-summary';
import StarsEntry from '../shared/stars-entry';
import DisLikes from './dislikes';
import Likes from './likes';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css';
import ProductReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css';
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.info.stars
    };
  }

  render() {
    return (
      <div className={Testimonial["testimonial-user-data"]}>
        <div className={Testimonial["testimonial-user-data-sel"]}>
          <div className={Testimonial["testimonial-user-stats"]}>
            <ReviewSummary
              sizeRate = {this.props.info.sizeRating}
              comfortRate = {this.props.info.comfortRating}
              performRate = {this.props.info.performanceRating}
              labelOff={true}
            />
          </div>

          <div className={ProductReviewSummary["stars"]}>
            <StarsEntry
              stars = {this.props.info.stars}
              subject = {this.props.info.subject}
              release = {this.props.release}
            />
          </div>
          <div className={ `${Testimonial['testimonial-message']} ${Testimonial['testimonial-background']}`}    >  {this.props.info.review}</div>

          <div>
            <span className={Testimonial['testimonial-pic']}>
            <img className = {Testimonial['shoe-symbol']} src={ this.props.static[randRange()]} ></img>
            </span>
            <span className={Testimonial['testimonial-pic']}>
            <img className = {Testimonial['shoe-symbol']} src={ this.props.static[randRange()]} ></img>
            </span>
          </div>

          <div className = {Testimonial['testimonial-message']}>  Was this helpful?

            <Likes
              user = {this.props.info.user}
              currCount = {this.props.info.likes}
              id = {this.props.pid}
              release = {this.props.release}
              static = {this.props.static}
            />

            <DisLikes
              user = {this.props.info.user}
              currCount ={this.props.info.dislikes}
              id = {this.props.pid}
              release = {this.props.release}
              static = {this.props.static}

            />

          </div>

          <div className={Testimonial['testimonial-response-fixed ']}>
            <img className={Testimonial['symbol']} src={this.props.static[0]} alt=''></img>
            <span className={Testimonial['small']}  >Response from Under Armour</span>
          </div>
        </div>


        <div className={Testimonial['testimonial-response-subject ']}>
          {!this.props.info.response ? ''
            :
            <div>
            <span className={Testimonial['small']} > <strong >  UAExpert , UACustomerService </strong></span>
            <span className={Testimonial['small']}> {this.props.info.responseDate.slice(0, 10)} </span>
            <span className={Testimonial['testimonial-message']}>
             <p> { this.props.info.response}  </p>
           </span>


            </div>

          }
        </div>
      </div>
    );
  }
}



var randRange = () => {
  var min = 3;
  var max = 11;
  return Math.floor(Math.random() * (max - min + 1)) + min;

};


export default UserData;
