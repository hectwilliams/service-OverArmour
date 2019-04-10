import React from 'react';
import $ from 'jquery';

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
    // e.preventDefault(
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
        <span className='likes-entry'>
          <button onClick={this.clickHanlder.bind(this)} className ='symbol dislikes'></button>
        </span>
        <small className= 'counter' > { this.state.update ?this.state.count :this.props.release? 0: this.state.count}</small>
      </span>
    );
  }
}
export default DisLikes;


