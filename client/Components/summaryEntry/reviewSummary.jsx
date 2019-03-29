import React from 'react';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {return(
    <div  className = "col-6">
      <div  className = "col">
        <strong className = "text-left">  Review Summary:</strong>
      </div>


      <div className="row ">

        <div className="col-4">
            <span className="col-12 text-right">Size</span>
            <div className="col-12">render chart</div>
        </div>

        <div className="col-4">
        <span className="col-12 text-right">Comfort</span>
            <div className="col-12">render chart</div>
        </div>

        <div className="col-4">
        <span className="col-12 text-right">Performance</span>
          <div className="col-12">render chart</div>
        </div>

      </div>
    </div>

  )};


}
export default ReviewSummary;