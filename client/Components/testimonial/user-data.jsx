import React from 'react';
import ReviewSummary from '../shared/review-summary'
import Stars from '../shared/stars'

const IMAGE_LINK = 'http://clipart-library.com/img/1969030.png'

class UserData extends React.Component {
constructor(props){
  super(props);
}

clickHanlder(e) {
  console.log('button clicked');
}


render(){
  return (
    <div className="testimonial-user-data">
      <div className="testimonial-user-data-sel">
        <div className="testimonial-user-stats">
          <ReviewSummary
          labelOff={true}/>
        </div>

        <div className="stars">
          <Stars
            stars = {!this.props.info?'':this.props.info.performanceRating}
          />
          <small> {!this.props.info?'':this.props.info.subject}  </small>
        </div>

        <div className='testimonial-message'>  {!this.props.info?'':this.props.info.review}</div>

        <div>
          <span className='testimonial-pic'>
            <img className='symbol' src={!this.props.info?'':this.props.info.logoA} ></img>
          </span>

          <span className='testimonial-pic'>
            <img className='symbol' src={!this.props.info?'':this.props.info.logoB} ></img>
          </span>
        </div>

        <div className='testimonial-message'>  Was this helpful?
          <span className='likes-entry'>
          <button  onClick={this.clickHanlder.bind(this)}  className=' symbol likes'></button>
          </span><small>{!this.props.info?'':this.props.info.likes}</small>

          <span className='likes-entry'>
            <button  onClick={this.clickHanlder.bind(this)} className=' symbol dislikes '></button>
          </span><small>{!this.props.info?'':this.props.info.dislikes}</small>
        </div>

        <div className='testimonial-response-fixed '>
              <img className='symbol' src={IMAGE_LINK} alt=''></img>
              <span>Response from Under Armour</span>
        </div>
      </div>


      <div className='testimonial-response-subject '>
          <span> <strong>  UAExpert , UACustomerService </strong></span>
          <span className='small'> {!this.props.info?'':this.props.info.responseDate.slice(0,10)} </span>
          <span className='testimonial-message'>  {!this.props.info?'':this.props.info.response}</span>
      </div>


    </div>




  )}
}


export default UserData;