import React from 'react';
import OneStar from './single-star';
import TwoStar from './two-star';
import ThreeStar from './three-star';
import FourStar from './four-stars';
import FiveStar from './five-stars';
import NullStars from './null-stars';
import ProductReviewSummary from '../css-modules/css-product-reviews-summary/ProductReviewSummary.module.css'

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.stars,
      cache: this.props.cache
    };
  }

  render () {
    return (
      <div className = {ProductReviewSummary['medium']}>
        {
          this.props.stars == 1 && this.props.release ?
            <OneStar subject ={this.props.subject}/>
            : this.props.stars == 2 && this.props.release ?
              <TwoStar
                fetch = {this.props.fetch.bind(this)}
                subject ={this.props.subject}
              />

              : this.props.stars == 3 && this.props.release ?
                <ThreeStar
                  fetch = {this.props.fetch.bind(this)}
                  subject ={this.props.subject}
                />

                : this.props.stars == 4 && this.props.release ?
                  <FourStar
                    fetch = {this.props.fetch.bind(this)}
                    subject ={this.props.subject}
                  />

                  : this.props.stars == 5 && this.props.release ?
                    <FiveStar
                      fetch = {this.props.fetch.bind(this)}
                      subject = {this.props.subject}
                    />
                    : this.props.release ? //event released if this is called no stars was selected in modal
                    <NullStars subject ={this.props.subject} />


                      : <span>
                        <span>
                          {
                            this.props.cache >= 1 ?
                              <i id='1' onClick = {this.props.reset} className= { `fa fa-star ${ProductReviewSummary['star']}`}   ></i>
                              : <i id='1' onClick = {this.props.fetch} className= "fa fa-star"></i>
                          }
                        </span>
                        <span>
                          {
                            this.props.cache >= 2 ?
                              <i id='2' onClick={this.props.reset}  className= { `fa fa-star ${ProductReviewSummary['star']}`}  ></i>
                              : <i id='2' onClick={this.props.fetch} className= "fa fa-star"></i>
                          }
                        </span>

                        <span>
                          {
                            this.props.cache >= 3 ?
                              <i id='3' onClick={this.props.reset}  className= { `fa fa-star ${ProductReviewSummary['star']}`} ></i>
                              : <i id='3' onClick={this.props.fetch} className= "fa fa-star"></i>
                          }
                        </span>

                        <span>
                          {
                            this.props.cache >= 4 ?
                              <i id='4' onClick={this.props.reset}  className= { `fa fa-star ${ProductReviewSummary['star']}`} ></i>
                              : <i id='4' onClick={this.props.fetch} className= "fa fa-star"></i>
                          }
                        </span>

                        <span>
                          {
                            this.props.cache >= 5 ?
                              <i id='5' onClick={this.props.reset}  className= { `fa fa-star ${ProductReviewSummary['star']}`} ></i>
                              : <i id='5' onClick={this.props.fetch} className= "fa fa-star"></i>
                          }
                        </span>
                      </span>
        }
      </div>
    );
  }
}

export default Stars;
