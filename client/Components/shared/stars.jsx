import React from 'react';
import OneStar from './single-star'
import TwoStar from './two-star'
import ThreeStar from  './three-star'
import FourStar from './four-stars'
import FiveStar from './five-stars'
import NullStars from  './null-stars'
class   Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars : this.props.stars,
      cache : this.props.cache
    }
  }

  render () {
    return (
      <div className='medium'>
      {

      this.props.stars == 1 ?
      <OneStar subject ={this.props.subject}/>

      :this.props.stars == 2 ?
      <TwoStar subject ={this.props.subject} />


      :this.props.stars == 3 ?
      <ThreeStar subject ={this.props.subject}/>

      :this.props.stars == 4 ?
      <FourStar subject ={this.props.subject}/>

      :this.props.stars == 5 ?
      <FiveStar subject ={this.props.subject} />
      :this.props.stars == 'null'?
      <NullStars subject ={this.props.subject} />

        :

      <span>

        <span>
        {
          this.props.cache >=1?
          <i id='1'   onClick={this.props.reset}  className= "fa fa-star star"></i>
          :
          <i id='1'  onClick={this.props.fetch}  className= "fa fa-star"></i>
        }
        </span>

        <span>
        {
          this.props.cache >=2?
          <i id='2'   onClick={this.props.reset}  className= "fa fa-star star"></i>
          :
          <i id='2'  onClick={this.props.fetch}  className= "fa fa-star"></i>
          }
        </span>

        <span>
        {
          this.props.cache >=3?
          <i id='3'   onClick={this.props.reset}  className= "fa fa-star star"></i>
          :
          <i id='3'  onClick={this.props.fetch}  className= "fa fa-star"></i>
          }

        </span>

        <span>
        {
          this.props.cache >=4?
          <i id='4'   onClick={this.props.reset}  className= "fa fa-star star"></i>
          :
          <i id='4'  onClick={this.props.fetch}  className= "fa fa-star"></i>
          }

        </span>

        <span>
        {
          this.props.cache >=5?
          <i id='5'   onClick={this.props.reset}  className= "fa fa-star star"></i>
          :
          <i id='5'  onClick={this.props.fetch}  className= "fa fa-star"></i>
          }

        </span>

      </span>
      }
      </div>
    )
  }
}

export default Stars;