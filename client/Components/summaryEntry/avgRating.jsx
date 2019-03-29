import React from 'react';
import FiveStar from './stars'
class AvgRating extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {return(


<div  className="col-2">
  <div> <strong className="text-left">Average Rating</strong> </div>
  <div> <span className="text-left"><FiveStar/></span> </div>
  <div> <span className="text-left"> {this.props.avg} out 5</span> </div>
</div>

  )};
}
export default AvgRating;

