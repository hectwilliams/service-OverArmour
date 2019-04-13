import React from 'react';
import ProductReviewSummaryEntry from './product-review-entry';
import FilterReviewEntry from './filter-review-entry';
import TestimonialEntry from './testimonial-entry';



class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app">
        <ProductReviewSummaryEntry
          avgStats = {this.props.avgStats}
        />
        <FilterReviewEntry
          addTestimonial = {this.props.addTestimonial.bind(this)}
        />

        <TestimonialEntry
          dbData = {this.props.dbData}
          dbStatic = {this.props.dbStatic}
          release = {this.props.release}
        />
      </div>
    );
  }
}



export default App;
