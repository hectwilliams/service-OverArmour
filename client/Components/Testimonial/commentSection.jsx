import React from 'react';
import Stars from '../summaryEntry/stars';
import UnderArmourResponse from './underArmourResponse';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
  }
  render(){return(
    <div>

      <div className="col-4"> <Stars/><span className="text-left">Review Subject</span> </div>
      <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet iusto voluptas labore, eos, nihil autem molestiae accusamus omnis neque est aspernatur. Harum dolorem labore alias repudiandae totam beatae perspiciatis.</div>
      <div className="col"> picture of issue</div>


      <div  className="col">
      <img width="100px" height="100px"  src= "https://cdn.pixabay.com/photo/2017/01/31/17/44/highway-2025863_1280.jpg" ></img>

      <br></br>
      <div className="col">  <span className="text-left">Was this helpful  <button className="text-left">THUMPS_DOWN++</button>   <button className="text-left">THUMP_UP++</button> </span></div>

      <br></br>
      <br></br>

      <UnderArmourResponse/>
            <div className="col">     Share this review  <button className=" border text-left">
              <img width="50px" height="50px"  src= "https://i1.wp.com/indianewengland.com/wp-content/uploads/2018/08/facebook.png?fit=400%2C400&ssl=1" ></img>
              </button>

              <button className="border text-left">
              <img width="50px" height="50px"  src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" ></img>             </button>

            </div>
      </div>
    </div>

  )}
}

export default CommentSection;

