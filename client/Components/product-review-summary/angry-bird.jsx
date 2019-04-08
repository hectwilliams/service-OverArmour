import React from 'react';

var AngryBird = (props) => (
  props.rate > 0 ?  <div className = {'angry-bird ' + parser(props.rate)   }> </div>
  :   <div className= {'angry-bird-off'}> </div>
)
export default AngryBird;

var parser = function(num) {
  var Num = Math.trunc(num);
  var Float  = Num -  (Num.toFixed(1) || 0);
  // console.log('float', Float)
  return 'dec-' + Num + ' ' ;
 }