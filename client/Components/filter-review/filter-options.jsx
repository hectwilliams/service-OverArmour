import React from 'react';

class FilterOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="segment">
        <span className="medium">Advanced filters</span>
        <div className="filter-selection-option-list">
          <div className='filter-selection-option'>
            <select className='filter-selection-option-font'>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='filter-selection-option'>
            <select className='filter-selection-option-font'>
              <option>Athlete Type</option>
              <option>Avid</option>
              <option>Casual</option>
              <option>Professional</option>
            </select>
          </div>
          <div className='filter-selection-option'>
            <select className='filter-selection-option-font'>
              <option className='font'>Sport Interest</option>
              <option>Sports Interest</option>
              <option>Baseball</option>
              <option>Basketball</option>
              <option>Field Hockey</option>
              <option>Fishing</option>
              <option>Training</option>
              <option>Football</option>
              <option>Golf</option>
              <option>Hockey</option>
              <option>Hunting</option>
              <option>Lacrosse</option>
              <option>Rugby</option>
              <option>Running</option>
              <option>Snow Sports</option>
              <option>Soccer</option>
              <option>Softball</option>
              <option>Tennis</option>
              <option>Trail</option>
              <option>Volleyball</option>
              <option>Wrestling</option>
              <option>Nothing Specific</option>
              <option>Other</option>
            </select>
          </div>

          <div className='filter-selection-option'>
            <select className='filter-selection-option-font'>
              <option>Hieght</option>
              <option> {'<5'} </option>
              <option>5'1"-5'3"</option>
              <option>5'4"-5'6"</option>
              <option>5'7"-5'9"</option>
              <option>5'10"-6'</option>
              <option> >6'1"</option>
            </select>
          </div>

          <div className='filter-selection-option'>
            <select className='filter-selection-option-font'>
              <option>Size Purchased</option>
              <option>XS</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
              <option>3XL</option>
            </select>
          </div>
        </div>
        <div className='filter-selection-option-font' >Click on filters to refine your results</div>
      </div>
    );
  }
}
export default FilterOption;