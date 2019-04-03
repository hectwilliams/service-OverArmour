import React from 'react';
import ProductReviewSummaryEntry from './entries/product-review-entry';
import FilterReviewEntry from './entries/filter-review-entry';
import TestimonialEntry from './entries/testimonial-entry';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      starTest: Math.random*5,
      oldStaticDatabase : this.props.dbStatic,
      oldData : this.props.dbData
    }
  }

  render() {
    return (
      <div>
        <ProductReviewSummaryEntry/>
         <FilterReviewEntry/>
         <TestimonialEntry
          dbData =  {this.props.dbData}
          dbStatic = {this.props.dbStatic}
          rate = {this.state.starTest}
         />
       </div>
    )};
}
export default App;

