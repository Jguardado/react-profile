import React from 'react';
import Games from '../src/components/home';


describe('Games Component', () => {
  const comp = shallow(<Games />);
  it('should render', () => {
    expect(comp).to.not.be.null;
  });
});
