import React from 'react';
import $ from 'jquery';

class Likes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : this.props.currCount
    }
  }


  clickHanlder(e) {
    var data  = ++e.target.parentNode.parentNode.lastChild.innerText;

    updatelikeCount( this.props.user, data, (err)=> {
      if (!err) {
        this.setState({
          count: data
        });
        }
    });
  }


  render(){
    return(
    <span >
      <span className='likes-entry'>
        <button  onClick={this.clickHanlder.bind(this)}  className=' symbol likes '></button>
      </span>
      <small className= 'counter' >{!this.props.currCount ? 0: this.state.count}</small>
    </span>
  )}
}
export default Likes;




var updatelikeCount = function(user, data , callback) {
  const id = 'pid3020612-405/';
  const host= 'http://localhost:3005/';
  const path = 'en-us/ua-curry-6-basketball-shoes/';
  const url =host+path+id+'likes/';
  console.log(data,user)

  $.ajax({
    method: "PUT",
    url :url,
    type : 'json',
    data :  { user: user , data: data  } ,
    success: ()=>{
      callback(null);
      console.log(url)
    },
    error: ()=> {
      callback(true)
    }
  })
};
