import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './MyPosts';

describe('PostForm', () => {
    it('should render without crashing', () => {
      const component = shallow(<PostForm />);
      expect(component).toBeTruthy();
    });
  }); 