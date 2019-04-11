import React from 'react';
import Modal from './modal-gen';
import FilterOptionCss from '../css-modules/css-filter-review/FilterReview.module.css';

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
      <div className={FilterOptionCss["segment"]}>
        <button onClick= {this.clickMe.bind(this)} className={FilterOptionCss["write-review"]} >  WRITE A REVIEW > </button>
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