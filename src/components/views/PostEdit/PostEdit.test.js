import React from 'react';
import { shallow } from 'enzyme';
import PostEdit from './MyPosts';

describe('PostEdit', () => {
    it('should render without crashing', () => {
      const component = shallow(<PostEdit />);
      expect(component).toBeTruthy();
    });
  }); 