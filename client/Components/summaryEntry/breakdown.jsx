import React from 'react';
import RateBar from './RateBar';

class Breakdown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {return(


<div  className="col-2">
<div> <strong className="text-left">Rating Breakdown</strong></div>
  <div> <span className="text-left"><RateBar/></span> </div>
</div>

  )};
}
export default Breakdown;

