import React from 'react';
import Form from './form';

class  Modal  extends React.Component   {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = 'modal'>
        <nav className='modal-className'></nav>
          <Form
          releaseModal = {this.props.releaseModal.bind(this)}
          addTestimonial = {this.props.addTestimonial.bind(this)}
          />
          <nav className='modal-className'></nav>
        </div>
    )
  }

}
export default Modal;