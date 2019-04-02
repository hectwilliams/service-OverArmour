import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import $ from 'jquery';

ReactDOM.render(<App/>,document.getElementById('root'));
const url = 'http://localhost:3005/en-us/ua-curry-6-basketball-shoes/pid3020612-405/aws';


$(document).ready(()=> {
  $.ajax({
    method: "get",
    url: url,
    type:"json",
    success: (data)=>{
      console.log(data)
      var uri = 'https://s3-us-west-1.amazonaws.com/fec-underamour-media/'+data.message[1].Key;
      ReactDOM.render(<App test={uri} />,document.getElementById('root'));
    }
  });
});