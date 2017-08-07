import React from 'react';
import Header from '../src/components/home';


describe('Header Component', () => {
  const comp = shallow(<Header />);
  it('should render', () => {
    expect(comp).to.not.be.null;
  });
});
