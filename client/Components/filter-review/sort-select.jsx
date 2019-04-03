import React from 'react';

class SortSelection extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="segment">
        <div className='shift'>
          <small >What is relevancy sort</small>
          <div >
            <select className="small" >
              <option> Choose Sort Order</option>
              <option >Most Relevant</option>
              <option >Newest</option>
            </select>
            <button className='sort-button'>^ </button>
          </div>
        </div>
      </div>
    )};
}
export default SortSelection;