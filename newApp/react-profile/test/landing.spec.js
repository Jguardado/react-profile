import React from 'react';
import Landing from '../src/components/home';


describe('Landing Component', () => {
  const comp = shallow(<Landing />);
  it('should render', () => {
    expect(comp).to.not.be.null;
  });
});
