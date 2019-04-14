import React from 'react';
import ProductReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css';
var parser = function(num) {
  var Num = Math.trunc(num);
  // var Float  = Num - (Num.toFixed(1) || 0);
  return 'dec-' + Num + '';
};


var AngryBird = (props) => (
  props.rate > 0 ? <div className =   { `${ProductReviewSummary['angry-bird']}  ${ProductReviewSummary[parser(props.rate)] } `}    > </div>
    : <div className= {ProductReviewSummary['angry-bird-off']}> </div>
);
export default AngryBird;

