import React from 'react';
import Stars from './stars';

class StarsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.stars,
    };
  }

  clickHandle (e) {
    var x = e.target.getAttribute('id');
    this.setState({
      stars: x,
    });
    this.props.fetch(x);
  }

  reset () {
    this.setState({
      stars: 0,
      cache: 'null',
    });
    // this.props.fetch(0);
  }

  render() {
    return (
      <div >
        <Stars
          fetch = {this.clickHandle.bind(this)}
          reset = {this.reset.bind(this)}
          stars = {this.props.stars}
          subject = {this.props.subject}
          cache = {this.state.stars}
          release = {this.props.release} //release from from :)
        />
      </div>
    );
  }
}
export default StarsEntry;