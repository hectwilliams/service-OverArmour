import React from 'react';
import Stars from './stars';

class  StarsEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stars: this.props.stars,
      cache:this.props.stars,
      subject : this.props.subject,
      set : false
    }
  }

  clickHandle (e) {

    var x = e.target.getAttribute('id');
    this.setState({
      stars: x,
      set: true
    });
    this.props.fetch(x);
  }

  reset (x) {
    this.setState({
      stars: 0,
      cache: 'null',
      set : false
    });
    return true;
  }

  render() {
  return(
    <div >
      <Stars
        fetch = {this.clickHandle.bind(this)}
        stars = {this.props.stars}
        subject = {this.props.subject}
        cache = {this.state.stars}
        reset = {this.reset.bind(this)}
        set = {this.state.set}
      />
    </div>
    )
  }
}
export default StarsEntry;