import React from 'react';
import $ from 'jquery';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css'

var updatelikeCount = function(user, data, id, callback) {
  $.ajax({
    method: 'PUT',
    url: 'http:/localhost:3005/' +'likes',
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

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.currCount,
      update : false
    };
  }



  clickHanlder(e) {
    var data = parseInt(e.target.parentNode.parentNode.lastChild.innerText) + 1;
    updatelikeCount( this.props.user, data, this.props.id ,(err)=> {
      if (!err) {
        this.setState({
          count: data,
          update: true
        });
      }
    });
  }

  render() {
    return (
      <span>
        <span className={Testimonial['likes-entry']}>
        <button onClick={this.clickHanlder.bind(this)} className =   { `${Testimonial['symbol']} ${Testimonial['likes']}`}  >
        </button>
        </span>
        <small > { this.state.update ?this.state.count :this.props.release? 0: this.state.count}</small>
      </span>
    );
  }
}
export default Likes;


