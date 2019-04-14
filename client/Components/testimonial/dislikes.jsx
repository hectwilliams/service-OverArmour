import React from 'react';
import $ from 'jquery';
import Testimonial from '../css-modules/css-testimonial/Testimonial.module.css'
const origin = window.location.origin;

var updateDislikeCount = function(user, data, id, callback) {

  $.ajax({
    method: 'PUT',
    url: origin + '/' +'dislikes',
    type: 'json',
    data: {user: user, data: data, id: id},
    success: ()=> {
      callback('null');
    },
    error: ()=> {
      console.log('nfiewfh')
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
      this.setState({
        count: data,
        update: true
      });

    updateDislikeCount( this.props.user, data, this.props.id ,(err)=> {
      if (err) {
        /*error*/
      }
    });
  }

  render() {
    return (
      <span>
        <span className={Testimonial['likes-entry']}>
        <button onClick={this.clickHanlder.bind(this)} className ={ `${Testimonial['symbol']} ${Testimonial['dislikes']}`}>
          </button>
        </span>
        <small className= 'counter' > { this.state.update ?this.state.count : this.state.count}</small>
      </span>
    );
  }
}
export default DisLikes;


