import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './MyPosts';

describe('NavBar', () => {
    it('should render without crashing', () => {
      const component = shallow(<NavBar />);
      expect(component).toBeTruthy();
    });
  }); 