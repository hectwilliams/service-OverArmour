import React from  'react';

class ReviewSummary  extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){return(
  <div className="col-2-review-summary">
  {this.props.labelOff? '': <label> Rating Summary:</label>}

    <div className= "col-2-review-bars">

    <div>
        <small>Size:</small>
        <div className="col-2-size-stat">
          <div className="bar"> </div>
          <div className="bar"> </div>
          <div className="bar"> </div>
          <div className="bar"> </div>
          <div className="bar"> </div>
          <div className="bar"> </div>
        </div>
      </div>
    <div>
        <small>Comfort:</small>
        <div className="col-2-size-stat">
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
        </div>
    </div>


    <div>
        <small>Performance:</small>
        <div className="col-2-size-stat">
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
        </div>
    </div>


  </div>
</div>
  )}
}


export default ReviewSummary;