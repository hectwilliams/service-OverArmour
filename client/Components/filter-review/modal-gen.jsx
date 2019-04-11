import React from 'react';
import Form from './form';
import FilterOptionCss from '../css-modules/css-filter-review/FilterReview.module.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = {FilterOptionCss['modal']}>
        <nav className= {FilterOptionCss['modal-className']}></nav>
        <Form
          releaseModal = {this.props.releaseModal.bind(this)}
          addTestimonial = {this.props.addTestimonial.bind(this)}
        />
        <nav className={FilterOptionCss['modal-className']}></nav>
      </div>
    );
  }
}
export default Modal;