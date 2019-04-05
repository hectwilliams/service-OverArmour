import React from 'react';


class ReviewButton extends React.Component  {
  constructor(props) {
    this.state = {
      modelEnable: false
    }
  }

  clickMe(e) {
    console.log(e.target.name);
    this.state.modelEnable = true;
  }
  removeModel() {
    this.state.modelEnable = false;

  }
  render(){
    return(
    <div className="segment">
        <button  done ={this.modelEnable.bind(this)}   clickMe = {this.clickMe.bind(this)}  className="write-review">  WRITE A REVIEW > </button>
      </div>
    )
  }
}



export default ReviewButton;