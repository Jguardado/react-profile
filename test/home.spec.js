import React from 'react';
import Home from '../src/components/home';


describe('Home Component', () => {
  const comp = shallow(<Home />);
  it('should render', () => {
    expect(comp).to.not.be.null;
  });
});
