import React from 'react';
import Mapper from '../testimonial/mapper';

class TestimonialEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbData: this.props.dbData
    };
  }

  render() {
    return (
      <div>
        {this.props.dbData ? this.props.dbData.map( (x, i) => (
          <Mapper key = {i} dbStatic = {this.props.dbStatic} dbData = {x}
            release = {this.props.release}
          />
        )) : ''}
      </div>
    );
  }
}
export default TestimonialEntry;




