import React from 'react';
import AvgRating from './summaryEntry/avgRating'
import Breakdown from './summaryEntry/breakdown'
import ReviewSummary from './summaryEntry/reviewSummary'

class SummaryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() { return (

    <div className="container-fluid summary">
      <div className="row ">
        <div className="col-md-11">
          <div className="container-fluid">
              <div className="row ">
                <AvgRating/>
                <Breakdown/>
                <ReviewSummary/>
              </div>
            </div>

          </div>
        </div>
      </div>
  )};
}

export default SummaryEntry;