import React from 'react'
import Mapper from '../testimonial/mapper';

class TestimonialEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  return(
    <div>
    {this.props.dbData.map( (x,i) =>(
        <Mapper  key={i} dbStatic = {this.props.dbStatic}  dbData = {x} />
    ))}
    </div>
  )}

}
export default TestimonialEntry ;




