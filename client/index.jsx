import React from 'react';
import ReactDOM from 'react-dom';
import App from  './Components/app'
import $ from 'jquery';

var id = 'pid3020612-405/';
const host= 'http://localhost:3005/';
const path = 'en-us/ua-curry-6-basketball-shoes/';
const endpoint = 'init/'

var url = host + path +id +endpoint;

$(document).ready(()=> {
  iniitializePage ();
});

var iniitializePage = function() {
  console.log(url)
  $.ajax({
    method: "get",
    url: url,
    type:"json",
    success: (data)=> {
      console.log(data)
      ReactDOM.render(<App dbStatic={data[0]} dbData={data.slice(1)}/> , document.getElementById('root'));
      // ReactDOM.render(<App /> , document.getElementById('root'));

    },
    error: (data)=> {
      console.log('error');
    }
  });
};

