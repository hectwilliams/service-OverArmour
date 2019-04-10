import React from 'react';
import $ from 'jquery';

var updatelikeCount = function(user, data, id, callback) {
  $.ajax({
    method: 'PUT',
    url: '/likes',
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
    console.log(this.props.id)

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
        <span className='likes-entry'>
          <button onClick={this.clickHanlder.bind(this)} className ='symbol likes'></button>
        </span>
        <small className= 'counter' > { this.state.update ?this.state.count :this.props.release? 0: this.state.count}</small>
      </span>
    );
  }
}
export default Likes;


