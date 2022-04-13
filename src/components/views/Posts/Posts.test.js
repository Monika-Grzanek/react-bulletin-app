import React from 'react';
import { shallow } from 'enzyme';
import Posts from './MyPosts';

describe('Posts', () => {
    it('should render without crashing', () => {
      const component = shallow(<Posts />);
      expect(component).toBeTruthy();
    });
  }); 