import React from 'react';
import ProductReviewSummaryEntry from './product-review-entry';
import FilterReviewEntry from './filter-review-entry';
import TestimonialEntry from './testimonial-entry';



class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state({

    // });
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
          dbStatic = {this.props.dbStatic}
          dbData = {this.props.dbData}
          release = {this.props.release}
        />

      </div>
    );
  }
}



export default App;
