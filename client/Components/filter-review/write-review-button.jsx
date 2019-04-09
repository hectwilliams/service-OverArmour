import React from 'react';
import Modal from './modal-gen';

class ReviewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEnabled: false,
    };
  }

  clickMe() {
    this.setState({
      modalEnabled: !this.state.modalEnabled
    });
  }

  releaseModal() {
    this.setState({
      modalEnabled: false
    });
  }

  render() {
    return (
      <div className="segment">
        <button onClick= {this.clickMe.bind(this)} className="write-review">  WRITE A REVIEW > </button>
        {!this.state.modalEnabled ? '' :
          <Modal
            releaseModal = {this.releaseModal.bind(this)}
            addTestimonial = {this.props.addTestimonial.bind(this)}
          />
        }
      </div>
    );
  }
}

export default ReviewButton;


// 45 minutes /