import React from 'react';
import Title from './title';
import Rule from './rule';
import SummaryEntry from './productSummaryEntry';
import ReviewAndFilterEntry from './ReviewAndFilterEntry'
import Testimonial from './testimonial'
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className='title'> <Title/> </div>
        <SummaryEntry/>
        <Rule/>
        <ReviewAndFilterEntry/>
        <Testimonial/>
      </div>
    )};
}

export default App;