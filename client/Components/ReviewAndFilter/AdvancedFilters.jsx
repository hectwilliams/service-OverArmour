import React from 'react';

class AdvancedFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {return(

    <div className="col-6">
      <span className="text-left">Advanced Filters</span>

      <div className="row">

        <div className="col-2 gender-type-options">
        <small>
          <select name="gender">
            <option> Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>


        </small>

        </div>

        <div  className="col-2 athletic-type-options">
          <small>
            <select name="athlete-type">
              <option>Athlete Type</option>
              <option>Avid</option>
              <option>Casual</option>
              <option>Professional</option>
            </select>
            </small>
        </div>

        <div className="col-2 sports-interest-options">
          <small>

            <select name="sports-interest">
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

          </small>
        </div>


        <div className="col-2">
          <small>
            <select name="height">
              <option>Height</option>
              <option> ≤5' </option>
              <option>5'1"-5'3"</option>
              <option>5'4"-5'6"</option>
              <option>5'7"-5'9"</option>
              <option>5'10"-6'</option>
              <option> >6'1"</option>
            </select>
          </small>
        </div>

        <div className="col-2">
          <small>
            <select name="Size-purchased">
              <option> Size Purchased</option>
              <option>XS</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
              <option>3XL</option>
              <option>Other</option>
            </select>
          </small>
        </div>

      </div>
        <span className="text-right">Click on filter to refine your results</span>
    </div>




  )};
}
export default AdvancedFilters;