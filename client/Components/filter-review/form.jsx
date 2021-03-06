import React from 'react';
import StarsEntry from '../shared/stars-entry';
import FilterOptionCss from '../css-modules/css-filter-review/FilterReview.module.css';

var getDate = () => {
  var sizeCheck = (x) => {
    if ((x).toString() !== 2) {
      return '0' + x;
    }
    return x;
  };
  var today = (new Date());
  return today.getUTCFullYear() + '-' + sizeCheck(today.getUTCMonth() - 1) + '-' + sizeCheck(today.getUTCDay() - 1);
};
/* Prototypal Class  --> REVIEW*/
var reviewer = function() {
  this.gender = '';
  this.user = '';
  this.date = getDate();
  this.sizePurchased = '';
  this.performanceRating = '';
  this.comfortRating = '';
  this.stars = 0;
  this.dislikes = 0;
  this.likes = 0;
  this.response = '';
  this.subject = '';
  this.review = '';
  this.picture = '';
  this.responseDate = '';
  this.sportsInterest = '';
  this.athleteType = '';
  this.height = '';
  this.logoA = '';
  this.logoB = '';
  this.timestamp = Date.now();
  this.pid = !Number.isInteger(window.location.pathname) ? 0 : window.location.pathname ;

};
reviewer.prototype.loadPicture = function() {
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      starComfort: null,
      starPerf: null,
      starSize: null,
      starProduct: null
    };
  }

  changedTextHandler (e) {
    this.setState({
      text: e.target.value,
    });
  }

  fetchStarComfort (rating) {
    this.setState({
      starComfort: rating
    });
  }
  fetchStarPerf (rating) {
    this.setState({
      starPerf: rating
    });
  }
  fetchStarSize(rating) {
    this.setState({
      starSize: rating
    });
  }
  fetchStarOverall(rating) {
    this.setState({
      starProduct: rating
    });
  }


  submitHandler (e) {
    e.preventDefault();
    var messenger = new reviewer();
    var children = document.getElementsByTagName('form')[0].children;
    Array.prototype.forEach.call(children, (ele, index, array)=> {
      if (ele.checked) {
        messenger[ele.name] = ele.value;
      } else if (ele.name ===  'review') {
        messenger.review = ele.value;
      } else if (ele.name === 'subject') {
        messenger.subject = ele.value;
      } else if (ele.name === 'user') {
        messenger.user = ele.value;
      }
    });

    messenger.comfortRating = this.state.starComfort;
    messenger.performanceRating = this.state.starPerf;
    messenger.sizeRating = this.state.starSize;
    messenger.stars = this.state.starProduct === 0 ? 0 : this.state.starProduct;
    this.props.addTestimonial(messenger);
    this.props.releaseModal();

  }

  render () {
    return (
      <form>
        <strong>Name(or alias)</strong><br></br>
        <input  className = {FilterOptionCss['fonts']}type='text' name='user'></input>
        <br></br>
        <br></br>
        <strong>Gender</strong><br></br>
        <span> Male</span> <input type='radio' name='gender' value='male' ></input>
        <span> Female</span> <input type='radio' name='gender' value='female' ></input>
        <br></br>
        <br></br>
        <strong> Athletic Type</strong>     <br></br>
        <span> Casual</span>  <input type='radio' name='athleteType' value='Casual' ></input>
        <span> Professional</span>   <input type='radio' name='athleteType' value='Professional' ></input>
        <span> Avid</span><input type='radio' name='athleteType' value='Avid' ></input><br></br>
        <br></br>
        <strong> Sport Interest</strong><br></br>
        <span> Basketball</span>  <input type='radio' name='sportsInterest' value='Basketball' ></input>
        <span> Field Hockey</span>  <input type='radio' name='sportsInterest' value='Field Hockey' ></input>
        <span> Fishing</span>  <input type='radio' name='sportsInterest' value='Fishing' ></input>
        <span> Training</span>  <input type='radio' name='sportsInterest' value='Training' ></input>
        <span> Football</span>  <input type='radio' name='sportsInterest' value='Football' ></input>
        <span> Golf</span>  <input type='radio' name='sportsInterest' value='Golf' ></input>
        <span> Lacrosse</span>  <input type='radio' name='sportsInterest' value='Lacrosse' ></input>
        <span> Rugby</span>  <input type='radio' name='sportsInterest' value='Rugby' ></input>
        <span> Soccer</span>  <input type='radio' name='sportsInterest' value='Soccer'></input><br></br>
        <br></br>
        <strong> Height</strong><br></br>
        <span> {'\<5\''} </span>  <input type='radio' name='height' value= {'\<5\''} ></input>
        <span> {'5\'4\" - 5\'6\"'} </span>  <input type='radio' name='height' value='5.4-5.6' ></input>
        <span> {'5\'7\" - 5\'9\"'} </span>  <input type='radio' name='height' value='5.7-5.9' ></input>
        <span> {'5\'1\" - 5\'3\"'}  </span> <input type='radio' name='height' value='5.1-5.3' ></input>
        <span> {'5\'10\" - 6\"' } </span>  <input type='radio' name='height' value='5.10-6' ></input>
        <span> {'5\'1\" - 5\'3\"'} </span>  <input type='radio' name='height' value='5.1-5.3' ></input>
        <span> {'>6\'1\"'} </span>  <input type='radio' name='height' value='>6.1' ></input><br></br>
        <br></br>
        <strong>Size Purchased</strong><br></br>
        <span>XS</span> <input type='radio' name='sizePurchased' value='XS'></input>
        <span>SM</span> <input type='radio' name='sizePurchased' value='SM'></input>
        <span>MD</span> <input type='radio' name='sizePurchased' value='MD'></input>
        <span>LG</span> <input type='radio' name='sizePurchased' value='LG'></input>
        <span>XL</span> <input type='radio' name='sizePurchased' value='XL'></input>
        <span>XXL</span> <input type='radio' name='sizePurchased' value='XXL'></input>
        <span>3XL</span> <input type='radio' name='sizePurchased' value='3XL'></input> <br></br>
        <br></br>
        <strong>Comfort Rating</strong><StarsEntry fetch = {this.fetchStarComfort.bind(this)}/>
        <br></br>
        <strong>Performance Rating</strong><StarsEntry fetch = {this.fetchStarPerf.bind(this)}/>
        <br></br>
        <strong>Size Rating</strong><StarsEntry fetch = {this.fetchStarSize.bind(this)}/>
        <br></br>
        <strong>Overall Rating</strong><StarsEntry fetch = {this.fetchStarOverall.bind(this)}/>
        <br></br>

        <strong>Subject</strong><br></br>
        <input className = {FilterOptionCss['fonts']} type='text' name='subject' min='0' max='100'></input>
        <br></br>

        <textarea onChange={this.changedTextHandler.bind(this)} name='review'
        className=    {`${FilterOptionCss['user-review-message-block']} ${FilterOptionCss['fontSizeMsg']}`}
        value = {this.state.text}> </textarea> <br></br>

        <input onClick={this.submitHandler.bind(this)} className= {FilterOptionCss['submit-review-button']} type={'submit'} value={'Post'}></input>
        <input onClick={this.props.releaseModal} className = {FilterOptionCss['release-review-button']} type={'submit'} value={'Cancel'}></input>
        <br></br>
      </form>
    );
  }
}


export default Form;

