import React from 'react';
import ProductReviewSummaryEntry from './entries/product-review-entry';
import FilterReviewEntry from './entries/filter-review-entry';
import TestimonialEntry from './entries/testimonial-entry';
import $ from 'jquery';

var addReviewToDatabase = function(data, uri, callback) {
  console.log('ADD REIVEWW ')
  console.log(data)
  $ .ajax({
    method: 'PUT',
    url: uri,
    type: 'json',
    data: data,
    success: ()=> {
      callback(null);
    },
    error: (err)=> {
      callback(true);
    },
  });

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbData: this.props.dbData,
      rating: '',
      release: false
    };
  }

  addTestimonial (obj) {
    addReviewToDatabase(obj,this.props.path, (err)=>{
      if (err) {

      } else {
        this.setState({
          dbData: [obj].concat(this.state.dbData), rating: obj.stars, release: true});
      }
    });
  }

  componentDidMount() {
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
          dbData = {this.state.dbData}
          dbStatic = {this.props.dbStatic}
          release = {this.state.release}
        />
      </div>
    );
  }
}



export default App;
