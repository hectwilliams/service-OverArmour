
import React from 'react';
import  enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import {shallow, mount, render} from 'enzyme';
const id = 'pid3020612-405/';
const host = 'http://localhost:3005/';
const path = 'en-us/ua-curry-6-basketball-shoes/';
const endpoint = 'init/';


/*app*/

import App from '../../client/Components/app';
describe('App Component ', ()=> {

  var reviewer = function() {
    this.gender = 'test';
    this.user = 'test';
    this.date = '99-9-9999',
    this.sizePurchased = 0;
    this.performanceRating = 0;
    this.comfortRating = 0;
    this.stars = 0;
    this.dislikes = 0;
    this.likes = 0;
    this.response = 'na';
    this.subject = 'na';
    this.review = 'na';
    this.picture = 'null';
    this.responseDate = '';
    this.sportsInterest = 'null';
    this.athleteType = 'null';
    this.height = 'null';
    this.logoA = 'null';
    this.logoB = 'null';
    this.timestamp = Date.now();
  };
  const wrapper = shallow(
    <App
    path={path}
    host={host}
    pid={id}
    avgStats = {[]}
    dbStatic = {[]}
    dbData = {[]}
  />) ;

  test('should send ajax request to rcv an array if addTestimonial function is invoked', ()=> {
    wrapper.instance().addTestimonial(new reviewer() );
    expect(wrapper.state().dbData).toEqual([]);
  })
  test('should have three total entry components', ()=> {
    expect(wrapper.children().length).toEqual(3);
  });

});


/*shared*/

import StarEntry from '../../client/Components/shared/stars-entry';
describe('Star-Entry Component', ()=> {

  test('should produce loaded value if read', ()=> {
    const wrapper = shallow(<StarEntry />);
    wrapper.setState({'stars': 2});
    expect(wrapper.state().stars).toBe(2);
  });
  test('should produce zero if reset invoked', ()=> {
    const dummyFunc = ()=> {
    };
    const wrapper = shallow(<StarEntry fetch = {dummyFunc}/>);
    wrapper.setState({'stars': 2});
    wrapper.instance().reset();
    expect(wrapper.state().stars).toBe(0);
  });

  test('should return 2 if user clicks second star', ()=> {
    const bells = jest.fn();
    const wrapper = shallow(<StarEntry fetch = {bells}/>);
    const faker = {target: {getAttribute:()=> {return 2}}};
    wrapper.instance().clickHandle(faker);
    expect(wrapper.state().stars).toBe(2);
  });
});


import OneStar from '../../client/Components/shared/single-star';
describe('Single Star ', ()=> {
  const wrapper = shallow(<OneStar/>);
  test('should contain star class', ()=> {
    expect(wrapper.html().indexOf(' star ') !== 0 ).toBe(true);
  });
});


import TwoStar from '../../client/Components/shared/two-star';
describe('Single Star ', ()=> {
  const wrapper = shallow(<TwoStar/>);
  test('should contain star class', ()=> {
    expect(wrapper.html().indexOf(' star ') !== 0 ).toBe(true);
  });
});


import ThreeStars from '../../client/Components/shared/three-star';
describe('Single Star ', ()=> {
  const wrapper = shallow(<ThreeStars/>);
  test('should contain star class', ()=> {
    expect(wrapper.html().indexOf(' star ') !== 0 ).toBe(true);
  });
});

import FourStars from '../../client/Components/shared/four-stars';
describe('Single Star ', ()=> {
  const wrapper = shallow(<FourStars/>);
  test('should contain star class', ()=> {
    expect(wrapper.html().indexOf(' star ') !== 0 ).toBe(true);
  });
});

import FiveStar from '../../client/Components/shared/five-stars';
describe('Single Star ', ()=> {
  const wrapper = shallow(<FiveStar/>);
  test('should contain star class', ()=> {
    expect(wrapper.html().indexOf(' star ') !== 0 ).toBe(true);
  });
});

import NullStar from '../../client/Components/shared/null-stars';
describe('Single Star ', ()=> {
  const wrapper = shallow(<NullStar/>);
  test('should contain star class', ()=> {
    expect(wrapper.getElements()).toBeDefined();
  });
});


import ReviewSummary from '../../client/Components/shared/review-summary';
describe('Review Summary', ()=> {
  test('', ()=> {
    const wrapper = shallow(<ReviewSummary />);
    expect(wrapper.hasClass('col-2-review-summary')).toBe(true);
  })
  test('should render 2 stars if size rate received', ()=> {
    const wrapper = render(<ReviewSummary sizeRate = {2} />);
    expect(wrapper.hasClass('col-2-review-summary')).toBe(true);
  })
  test('should render 2 stars if size comfortRate received', ()=> {
    const wrapper = shallow(<ReviewSummary comfortRate = {2} />);
    expect(wrapper.hasClass('col-2-review-summary')).toBe(true);
  })
  test('should render 2 stars if size performRate received', ()=> {
    const wrapper = shallow(<ReviewSummary performRate = {2} />);
    expect(wrapper.hasClass('col-2-review-summary')).toBe(true);
  })
});

import Stars from '../../client/Components/shared/stars';
describe('Stars', ()=> {
  test('should render dark stars if only release command is received', ()=> {
    const wrapper = render(<Stars release = {true}/>);
    expect(wrapper.length).toBe(1);
  })
  test('render dark star if release if false and no update props are loaded', ()=> {
    const wrapper = render(<Stars release = {false}/>);
    expect(wrapper.length).toBe(1);
  })
  test('render selection module if user selects different stars', ()=> {
    const wrapper = render(<Stars release = {false} cache ={4} />);
    expect(wrapper.length).toBe(1);
  })
  test('render 1 star  module if release received and the user selected a 1 star rating', ()=> {
    const wrapper = render(<Stars release = {false} stars ={1} />);
    expect(wrapper.length).toBe(1);
  })
});






// /* --FilterReview--*/

// import FilterReviewEntry from '../../client/Components/entries/filter-review-entry';
// describe('react index.jsx', ()=> {
//   test('Entry component exist', ()=> {
//     const Component = shallow(<FilterReviewEntry/>) ;
//     expect( Component.exists()).toBe(true);
//   })
// });

import ReviewButton from '../../client/Components/filter-review/write-review-button';
import Modal from '../../client/Components/filter-review/modal-gen'
describe('Review Button Component', ()=> {
  test('should use Modal', ()=> {
    const wrapper= shallow(<ReviewButton/>) ;
    expect( wrapper.find(Modal)).toHaveLength(1);
  })
  test('should reset modalEnabled if releaseModal() invoked', ()=> {
    const wrapper= shallow(<ReviewButton/>) ;
    wrapper.setState({'modelEnabled': true });
    wrapper.instance().releaseModal();
    expect(wrapper.state().modelEnabled).toBe(true);
  })
});

import Form from '../../client/Components/filter-review/form'
describe('Modal', ()=>{
  test('should render Form ', ()=> {
    wrapper = render(<Modal/>);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});

describe('Form', ()=>{
  test('should render form', ()=>{
    const wrapper = shallow(<Form/>);
    expect(wrapper.exists()).toBe(true);
  });
  test('should update text area', ()=>{
    const wrapper = mount(<Form/>);
    wrapper.setState({text: 'INIT'});
    wrapper.find('textarea').simulate("change", {target : { value: "BYE" } } );   //{
    expect(wrapper.state().text).toBe('BYE');
  });
  test('should submit form', ()=>{
    const wrapper = mount(<Form/>);
    wrapper.setState({text: 'INIT'});
    wrapper.find('submit-review-button'); //{
    // expect(wrapper.state().text).toBe('BYE');
  });

  test('should release form', ()=>{
    const wrapper = mount(<Form/>);
    wrapper.setState({text: 'INIT'});
    wrapper.find('release-review-button');//{
    // expect(wrapper.state().text).toBe('BYE');
  });


});


import FilterOption from '../../client/Components/filter-review/filter-options';
describe('Filter Options', ()=> {
  test('should  exist', ()=> {
    const Component = shallow(<FilterOption/>) ;
    expect( Component.exists()).toBe(true);
  })
});
import SortSelection from '../../client/Components/filter-review/sort-select';
describe('Sort Selection Option', ()=> {
  test('should  exist', ()=> {
    const Component = shallow(<SortSelection/>) ;
    expect( Component.exists()).toBe(true);
  })
});





// /* --Testimonial--*/
import TestimonialEntry from '../../client/Components/entries/testimonial-entry';
import Mapper from '../../client/Components/entries/testimonial-entry'
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = mount(<TestimonialEntry/>) ;
    expect( Component.find(Mapper).length).toBe(1);
  })
});

// import Mapper from '../../client/Components/testimonial/mapper';
// describe('react index.jsx', ()=> {
//   test('Entry component exist', ()=> {
//     const Component = mount(<Mapper/>) ;
//     expect( Component.exists()).toBe(true);
//   })
// });


// import UserData from '../../client/Components/testimonial/user-data';
// import { logicalExpression } from '@babel/types';
// describe('react index.jsx', ()=> {
//   test('Entry component exist', ()=> {
//     var obj = {
//       likes :100,
//       dislikes : 22,
//       review :  'okay',
//       logoA : null,
//       logoB: null,
//       response: "haha",
//       performanceRating:3,
//       responseDate: '2019-02-01'
//     }
//     const Component = mount(<UserData info = {obj} />) ;
//     expect( Component.exists()).toBe(true);
//   })
// });


import UserInfo from '../../client/Components/testimonial/user-data';
describe('User Info Component', ()=> {
  var userObj = {
    user: 'nothing',
    Date: 'December 10000 100000',
    Gender: 'male',
    athleteType: 'avid',
    sportsInterest: 'none',
    height: '5"',
    sizePurchased: 10
  }
  // test('should have class ', ()=> {
  //   const Component = shallow(<UserInfo info = {{}}/>) ;
  //   expect( Component.hasClass('testimonial-user-who')).toBe(true);
  // })
  // test('should have class ', ()=> {
  // const Component = shallow(<UserInfo info = {{user: 'name'}}/>) ;
  //   expect( Component.hasClass('testimonial-user-who')).toBe(true);
  // })
  test('should have class ', ()=> {
    const Component = shallow(<UserInfo info = {userObj}/>) ;
      expect( Component.hasClass('list')).toBe(true);
    })
});




/* ratings-review-summmary*/
import ProductReviewSummaryEntry from '../../client/Components/entries/product-review-entry';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow (<ProductReviewSummaryEntry star = {0}/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import RatingBreakdown from '../../client/Components/product-review-summary/rating-breakdown';
describe('Rating Breakdown (i.e. bar graph', ()=> {
  test('should  always render bar graph', ()=> {
    const Component = shallow(<RatingBreakdown starBreakdown = {{1: 2, 2: 22, 3:98, 4:100, 5:100}}/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import AvgRating from '../../client/Components/product-review-summary/avg-rating';
describe('Avg Rate Summary', ()=> {
  test('should render star component ', ()=> {
    const wrapper = shallow(<AvgRating/>) ;
    expect(wrapper.find('Stars')).toHaveLength(1);
  })
});




import Dislikes from '../../client/Components/testimonial/dislikes';
import Likes from '../../client/Components/testimonial/likes';
const faker = {
  target: {
    parentNode: {
      parentNode: {
        lastChild: {
          innerText: 'dummy'
        }
      }
    }
  }
};
describe('Likes/Dislikes Summary', ()=> {
  faker.target.parentNode.parentNode.lastChild.innerText = 'faker info';
  test('should update like on DOM ', ()=> {
    const wrapper = shallow(<Likes/>) ;
    wrapper.instance().clickHanlder(faker);
    expect(wrapper.state.data).toBe(undefined)
  })
  test('should update like on DOM ', ()=> {
    const wrapper = shallow(<Likes/>) ;
    wrapper.instance().clickHanlder(faker);
    expect(wrapper.state.data).toBe(undefined)
  })
  test('should update like on DOM ', ()=> {
    const wrapper = shallow(<Dislikes/>) ;
    wrapper.instance().clickHanlder(faker);
    expect(wrapper.state.data).toBe(undefined)
  })
  test('should update like on DOM ', ()=> {
    const wrapper = shallow(<Dislikes/>) ;
    wrapper.instance().clickHanlder(faker);
    expect(wrapper.state().data).toBe(undefined)
  })
});



