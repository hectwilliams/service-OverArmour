import React from 'react';
import $ from 'jquery';
import App from '../app';

var addReviewToDatabase = function(data, callback) {
  console.log(data)
  $ .ajax({
    method: 'PUT',
    url: 'add-review',
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


class Main extends React.Component {
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
    var endpoint = HectronPluck(window.location.href);
    if(endpoint == 'init') {
      this.requestOrigin(endpoint);
    } else if (!isNaN(endpoint)) {
      this.requestNonOrigin(endpoint);
    }
  }

  requestOrigin(endpoint) {
    $.ajax({
      method: 'get',
      url: endpoint ,
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
      error: ()=> {
      }
    });
  }

  requestNonOrigin(endpoint) {
    $.ajax({
      method: 'get',
      url: 'reviews' + '/' + endpoint,
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
    addReviewToDatabase(obj, (err)=>{
      if (err) {
        console.log('err')
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
export default Main;

var HectronPluck = (url) => {
  var idx = url.lastIndexOf('/')+1;
  var tail =  url.slice(idx) ;
  if ( tail > 0 && tail <= 100) {
    return tail ;
  }
  return 'init';
};
