import React from 'react'

var FiveStar = (props) => (
  <span>
    <i id='1'  className= "fa fa-star star"></i>
    <i id='2'  className= "fa fa-star star"></i>
    <i id='3'  className= "fa fa-star star"></i>
    <i id='4'  className= "fa fa-star star"></i>
    <i id='5'  className= "fa fa-star star"></i>
    <span> <strong>  {props.subject}   </strong>  </span>
  </span>


)
export default FiveStar