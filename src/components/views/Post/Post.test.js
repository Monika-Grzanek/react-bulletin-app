import React from 'react';
import { shallow } from 'enzyme';
import Post from './MyPosts';

describe('Post', () => {
    it('should render without crashing', () => {
      const component = shallow(<Post />);
      expect(component).toBeTruthy();
    });
  }); 