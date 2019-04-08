import React from 'react';
import ProductReviewSummaryEntry from './entries/product-review-entry';
import FilterReviewEntry from './entries/filter-review-entry';
import TestimonialEntry from './entries/testimonial-entry';
import $ from 'jquery';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dbData: this.props.dbData,
      rating: '',
      release: false
    }
  }

  addTestimonial (obj) {
    addReviewToDatabase(obj, this.props.pid, this.props.host, this.props.path, (err)=>{
      if(err) {
      } else {
          this.setState({
      dbData: [obj].concat(this.state.dbData),
      rating: obj.stars,
      release: true
    });
      }
    });
  }

  render() {
    return (
      <div className="app">

        <ProductReviewSummaryEntry
          avgStats = {this.props.avgStats}
        />
        <FilterReviewEntry
          addTestimonial = {this.addTestimonial.bind(this)}
        />

         <TestimonialEntry
          dbData =  {this.state.dbData}
          dbStatic = {this.props.dbStatic}
          release = {this.state.release}

         />
       </div>
    )};
}
export default App;

var addReviewToDatabase = function(data , pid,  hostname, path, callback ) {
  const endpoint = 'add-review/';
  const uri = hostname + path + pid + endpoint;

  $ .ajax({
    method: 'PUT',
    url: uri,
    type: 'json',
    data: data,
    success: ()=> {
      callback(null)
    },
    error: (err)=> {
      console.log('duplicate insertion')
      callback(true)
    },
  });

};

