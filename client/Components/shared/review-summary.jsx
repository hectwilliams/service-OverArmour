import React from  'react';
import AngryBird from '../product-review-summary/angry-bird';

class ReviewSummary  extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){return(
  <div   className="col-2-review-summary">

    {

      (this.props.sizeRate > 0  || this.props.comfortRate > 0   ||  this.props.performRate > 0 ) ?  <label> Rating Summary:</label> : ''}

    <div className= "col-2-review-bars">

    {!this.props.sizeRate? ''
    :
    <div >
      <small>Size:</small>
      <div className="wrapper">
        <div className="col-2-size-stat">
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
        </div>
        <AngryBird
          rate =  {this.props.sizeRate}
        />
      </div>
    </div>
  }


  {!this.props.comfortRate? ''
      :
      <div>
        <small>Comfort:</small>
        <div className="wrapper">
          <div className="col-2-size-stat">
            <div className = "bar"> </div>
            <div className = "bar"> </div>
            <div className = "bar"> </div>
            <div className = "bar"> </div>
            <div className = "bar"> </div>
            <div className = "bar"> </div>
            <div className = "bar"> </div>
          </div>
          <AngryBird

            rate ={ this.props.comfortRate }
          />
        </div>
      </div>
  }

  {!this.props.performRate? ''
      :
    <div>
      <small>Performance:</small>
      <div className="wrapper">
        <div className="col-2-size-stat">
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
          <div className = "bar"> </div>
        </div>
        <AngryBird
          rate ={ this.props.performRate }
        /> </div>
    </div>
  }

  </div>
</div>
  )}
}


export default ReviewSummary;