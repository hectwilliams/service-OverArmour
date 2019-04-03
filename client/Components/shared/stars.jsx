import React from 'react';

var Stars = (props) => (

    <div className='medium'>

  {props.stars>=1 ?    <i className= "fa fa-star star"></i> :
  <i className= "fa fa-star"></i>}
 {props.stars>=2 ?    <i className= "fa fa-star star"></i> :
  <i className= "fa fa-star"></i>}
 {props.stars>=3 ?    <i className= "fa fa-star star"></i> :
  <i className= "fa fa-star"></i>}
 {props.stars>=4?    <i className= "fa fa-star star"></i> :
  <i className= "fa fa-star"></i>}
 {props.stars>=5 ?    <i className= "fa fa-star star"></i> :
  <i className= "fa fa-star"></i>}



    </div>
)
export default Stars;