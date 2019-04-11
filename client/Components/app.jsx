import React from 'react';
import ProductReviewSummaryEntry from './entries/product-review-entry';
import FilterReviewEntry from './entries/filter-review-entry';
import TestimonialEntry from './entries/testimonial-entry';
import $ from 'jquery';



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
