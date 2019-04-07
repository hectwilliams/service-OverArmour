import React from 'react';
import ReviewButton from  '../filter-review/write-review-button';
import FilterOption from '../filter-review/filter-options';
import SortSelection from '../filter-review/sort-select';


class FilterReviewEntry extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
    <div className="filter-selection">
      <ReviewButton
        addTestimonial = {this.props.addTestimonial.bind(this)}

      />
      <FilterOption/>
      <SortSelection/>
    </div>
  )}
}
export default FilterReviewEntry;


