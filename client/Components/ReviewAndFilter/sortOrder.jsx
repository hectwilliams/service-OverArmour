import React from 'react';
class SortOrder extends React.Component {
  constructor(props){
    super(props);
  }
  render() {return(
    <div  className="col-md-3 text-center">
    <select>
      <option value="ask">Choose a sort order</option>
      <option value="most-relevant">Most Relevant</option>
      <option value="newest">Newest</option>
      <option value="more">...</option>
    </select>
  </div>
  )}
}
export default SortOrder;