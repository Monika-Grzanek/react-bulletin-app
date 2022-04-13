import React from 'react';
import { shallow } from 'enzyme';
import MyPosts from './MyPosts';

describe('MyPosts', () => {
    it('should render without crashing', () => {
      const component = shallow(<MyPosts />);
      expect(component).toBeTruthy();
    });
  }); 