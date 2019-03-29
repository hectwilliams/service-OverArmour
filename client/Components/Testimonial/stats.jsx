import React from 'react';

class Stats extends React.Component {
  constructor(props){
    super(props);
  }
  render(){return(
<div className="col-8 offset-md-4">
    <div className="row">
      <div  className="col">
        <span className="text-left">Performance</span>
        <div className="col">render stats chart</div>
      </div>
      <div  className="col">
        <span className="text-left">Comfort</span>
        <div className="col">render stats chart</div>
      </div>
      <div  className="col">
        <span className="text-left">Size</span>
        <div className="col">render stats chart</div>
      </div>
    </div>
</div>
  )}
}


export default Stats;

