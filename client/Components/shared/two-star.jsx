import React from 'react'

var TwoStar = (props) => (
  <span>
    <i id='1'  className= "disable-dom  fa fa-star star"></i>
    <i id='2'  className= " disable-dom  fa fa-star star"></i>
    <span> <strong>  {props.subject}   </strong>  </span>
  </span>


)
export default TwoStar