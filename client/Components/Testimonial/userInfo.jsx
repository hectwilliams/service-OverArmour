import React from 'react';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){return(
    <div className="col-md-3">
    <div className="col"> </div>
    <div className="col">
      <ul className="list-unstyled small">
        <li>  Posted by user</li>
        <li>  February 19,2019</li>
        <li>  <strong> Gender</strong> </li>
        <li>  <strong> Athlete</strong>   Type</li>
        <li>   <strong> Sport Interest</strong>  </li>
        <li>   <strong> Height</strong>  </li>
        <li>   <strong> Size purchased</strong>  </li>
      </ul>
    </div>
</div>
  )}
}







export default UserInfo;