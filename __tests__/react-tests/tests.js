
import React from 'react';
import  enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import {shallow, mount, render} from 'enzyme';



/*app*/

import App from '../../client/Components/app';
describe('react index.jsx', ()=> {
  test('renders 3 components', ()=> {
    const appComponent = shallow(<App/>) ;
    expect( appComponent.length).toBe(1);
  })
});


/*shared*/
import Stars from '../../client/Components/shared/stars';
describe('react index.jsx', ()=> {
  test('this is a test', ()=> {
    expect(shallow(<Stars/>).is('.medium')).toBe(true);
  })
});

import ReviewSummary from '../../client/Components/shared/review-summary';
describe('react index.jsx', ()=> {
  test('has class col-2-review-summary', ()=> {
    const Component = shallow(<ReviewSummary/>) ;
    expect( Component.hasClass("col-2-review-summary")    ).toBe(true);
  })
});




/* --FilterReview--*/

import FilterReviewEntry from '../../client/Components/entries/filter-review-entry';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<FilterReviewEntry/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import ReviewButton from '../../client/Components/filter-review/write-review-button';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<ReviewButton/>) ;
    expect( Component.exists()).toBe(true);
  })
});
import FilterOption from '../../client/Components/filter-review/filter-options';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<FilterOption/>) ;
    expect( Component.exists()).toBe(true);
  })
});
import SortSelection from '../../client/Components/filter-review/sort-select';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<SortSelection/>) ;
    expect( Component.exists()).toBe(true);
  })
});





/* --Testimonial--*/
import TestimonialEntry from '../../client/Components/entries/testimonial-entry';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = mount(<TestimonialEntry/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import Mapper from '../../client/Components/testimonial/mapper';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = mount(<Mapper/>) ;
    expect( Component.exists()).toBe(true);
  })
});


import UserData from '../../client/Components/testimonial/user-data';
import { logicalExpression } from '@babel/types';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    var obj = {
      likes :100,
      dislikes : 22,
      review :  'okay',
      logoA : null,
      logoB: null,
      response: "haha",
      performanceRating:3,
      responseDate: '2019-02-01'
    }
    const Component = mount(<UserData info = {obj} />) ;
    expect( Component.exists()).toBe(true);
  })
});


import UserInfo from '../../client/Components/testimonial/user-data';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<UserInfo/>) ;
    expect( Component.exists()).toBe(true);
  })
});





/* ratings-review-summmary*/
import ProductReviewSummaryEntry from '../../client/Components/entries/product-review-entry';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<ProductReviewSummaryEntry/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import RatingBreakdown from '../../client/Components/product-review-summary/rating-breakdown';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<RatingBreakdown/>) ;
    expect( Component.exists()).toBe(true);
  })
});

import AvgRating from '../../client/Components/product-review-summary/avg-rating';
describe('react index.jsx', ()=> {
  test('Entry component exist', ()=> {
    const Component = shallow(<AvgRating/>) ;
    expect( Component.exists()).toBe(true);
  })
});






