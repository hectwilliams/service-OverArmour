import React from 'react';
import Stats from './stats'
import CommentSection from './commentSection';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }
  render(){return(
    <div className="col-8">
          <Stats/>
          <CommentSection/>
    </div>

  )}
}


export default UserProfile;

