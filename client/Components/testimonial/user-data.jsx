import React from 'react';
import ReviewSummary from '../shared/review-summary';
import StarsEntry from '../shared/stars-entry';
import DisLikes from './dislikes';
import Likes from './likes';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.info.stars
    };
  }

  render() {
    return (
      <div className="testimonial-user-data">
        <div className="testimonial-user-data-sel">
          <div className="testimonial-user-stats">
            <ReviewSummary
              sizeRate = {this.props.info.sizeRating}
              comfortRate = {this.props.info.comfortRating}
              performRate = {this.props.info.performanceRating}
              labelOff={true}
            />
          </div>

          <div className="stars">
            <StarsEntry
              stars = {this.props.info.stars}
              subject = {this.props.info.subject}
              release = {this.props.release}
            />
          </div>

          <div className='testimonial-message testimonial-background '>  {this.props.info.review}</div>
          <div>
            <span className='testimonial-pic'>
              <img className='symbol' src={ this.props.static[3] } ></img>
            </span>

            <span className='testimonial-pic'>
              <img className='symbol' src={this.props.static[3]} ></img>
            </span>
          </div>

          <div className='testimonial-message'>  Was this helpful?

            <Likes
              user = {this.props.info.user}
              currCount = {this.props.info.likes}
              id = {this.props.pid}
              release = {this.props.release}

            />

            <DisLikes
              user = {this.props.info.user}
              currCount ={this.props.info.dislikes}
              id = {this.props.pid}
              release = {this.props.release}

            />

          </div>

          <div className='testimonial-response-fixed '>
            <img className='symbol' src={this.props.static[0]} alt=''></img>
            <span>Response from Under Armour</span>
          </div>
        </div>


        <div className='testimonial-response-subject '>
          <span> <strong>  UAExpert , UACustomerService </strong></span>
          <span className='small'> {this.props.info.responseDate.slice(0, 10)} </span>
          {!this.props.info.response ? ''
            : <span className='testimonial-message'> {this.props.info.response}</span>
          }
        </div>
      </div>
    );
  }
}


export default UserData;