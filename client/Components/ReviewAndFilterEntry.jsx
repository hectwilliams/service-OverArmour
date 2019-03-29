import React from 'react';
import WriteReview from './ReviewAndFilter/review';
import AdvancedFilters from './ReviewAndFilter/AdvancedFilters';

import SortOrder from './ReviewAndFilter/sortOrder';

class ReviewAndFilterEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <div  className="col-12">
                <div className="row">
                  <WriteReview/>
                  <AdvancedFilters/>
                  <SortOrder/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )};
}

export default ReviewAndFilterEntry;