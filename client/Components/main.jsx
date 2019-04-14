import React from 'react';
import $ from 'jquery';
import App from '../Components/entries/app';

const origin = window.location.origin;

var addReviewToDatabase = function(data, callback) {
  console.log(data)
  $ .ajax({
    method: 'PUT',
    url: origin + '/' + 'add-review',
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

class ShoeReview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      checkReq: false,
      id: null,
      dbData: [],
      dbavgStats: [],
      dbStatic: [],
      rating: '',
      release: false
    }
  }

  componentDidMount () {
    var value = 'init';
    if (Number.isInteger(window.location.pathname)){
      this.request(  'reviews' + '/' + window.location.pathname )
    }
    this.reqService(value);
  }

  reqService(endpoint) {
    $.ajax({
      method: 'get',
      url: origin + '/' +endpoint ,
      success: (serviceData)=> {
        console.log(serviceData);
        this.setState({
          dbData: serviceData.slice(2),
          dbavgStats: serviceData[0],
          dbStatic: serviceData[1],
          ready: true,
          id: endpoint,
          release: true
        });
      },
    });
  }

  addTestimonial (obj) {
    this.setState({
      dbData: [obj].concat(this.state.dbData), rating: obj.stars});

    addReviewToDatabase(obj, (err)=>{
      if (err) {
        console.log('err')
      }
    });
  }

  render() {
    return (
      <div>
        {!this.state.ready ? 'please wait ...' :
          <App
            id =  {this.state.id}
            avgStats = {this.state.dbavgStats}
            dbStatic = {this.state.dbStatic}
            dbData = { this.state.dbData}
            addTestimonial = {this.addTestimonial.bind(this)}
            release = {this.state.release}
          />
        }
      </div>
    )
  }
}
export default ShoeReview;