import React from 'react';
import $ from 'jquery';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css'

var updateDislikeCount = function(user, data, id, callback) {
  $.ajax({
    method: 'PUT',
    url: 'dislikes',
    type: 'json',
    data: {user: user, data: data, id: id},
    success: ()=> {
      callback(null);
    },
    error: ()=> {

      callback(true);
    }
  });
};

class DisLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.currCount,
      update: false

    };
  }

  clickHanlder(e) {
      var data =  parseInt(e.target.parentNode.parentNode.lastChild.innerText) + 1;
    updateDislikeCount( this.props.user, data, this.props.id ,(err)=> {
      if (!err) {
        this.setState({
          count: data,
          update: true

        });
      } else {
        console.log('errro')
      }
    });
  }

  render() {
    return (
      <span>
        <span className={Testimonial['likes-entry']}>
        <button onClick={this.clickHanlder.bind(this)} className ={ `${Testimonial['symbol']} ${Testimonial['dislikes']}`}   >
          </button>
        </span>
        <small className= 'counter' >{!this.props.currCount ? 0: this.state.count}</small>

      </span>
    );
  }
}
export default DisLikes;


