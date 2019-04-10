import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import $ from 'jquery';


const endpoint = 'init/';

var iniitializePage = function() {

  $.ajax({
    method: 'get',
    url: endpoint,
    type: 'json',
    success: (data)=> {
      ReactDOM.render(<App path={window.location.href} avgStats = {data[0]} dbStatic={data[1]} dbData={data.slice(2)}/>, document.getElementById('root'));
    },
    error: (data)=> {
      console.log('error');
    }
  });
};



$(document).ready(()=> {
  iniitializePage ();
});

