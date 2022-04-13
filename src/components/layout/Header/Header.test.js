import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {
    it('should render without crashing', () => {
      const component = shallow(<Header />);
      expect(component).toBeTruthy();
    });
  }); 