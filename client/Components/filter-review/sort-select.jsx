import React from 'react';
import FilterOptionCss from '../css-modules/css-filter-review/FilterReview.module.css';
class SortSelection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={FilterOptionCss["segment"]}>
        <div className={FilterOptionCss['shift']}>
          <small >What is relevancy sort</small>
          <div>
            <select className={FilterOptionCss["small"]} >
              <option> Choose Sort Order</option>
              <option >Most Relevant</option>
              <option >Newest</option>
            </select>
            {/* <button className={FilterOptionCss['sort-button']}>^ </button> */}
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default SortSelection;