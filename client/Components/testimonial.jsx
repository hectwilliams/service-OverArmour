import React from 'react';
import UserInfo from './Testimonial/userInfo';
import UserProfile from './Testimonial/userProfile';
import CommentSection from './Testimonial/commentSection';
class Testimonial extends React.Component {
  constructor(props){
    super(props);
  }
  render(){return(
    <div className="container-fluid">
      <div className="row">
        <UserInfo/>
        <UserProfile/>
      </div>
    </div>
  )}
}


export default Testimonial;

