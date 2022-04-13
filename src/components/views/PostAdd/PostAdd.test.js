import React from 'react';
import { shallow } from 'enzyme';
import PostAdd from './MyPosts';

describe('PostAdd', () => {
    it('should render without crashing', () => {
      const component = shallow(<PostAdd />);
      expect(component).toBeTruthy();
    });
  }); 