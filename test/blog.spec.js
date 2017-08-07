import React from 'react';
import Blog from '../src/components/home';


describe('Blog Component', () => {
  const comp = shallow(<Blog />);
  it('should render', () => {
    expect(comp).to.not.be.null;
  });
});
