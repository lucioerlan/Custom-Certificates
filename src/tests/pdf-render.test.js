import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from 'src/views/home/HomeView/Home';

describe('render HomeComponent', () => {
  it('renders', () => {
    shallow(<HomeComponent />);
  });

  it('should contain HomeComponent', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(wrapper.find({ 'data-testid': 'home-component' }).exists()).toBe(
      true
    );
  });

  it('should contain 1 children', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(
      wrapper.find({ 'data-testid': 'home-component' }).children().length
    ).toBe(2);
  });

  it('should contain text equal', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(wrapper.find({ 'data-testid': 'home-component' }).text()).toEqual(
      '<PDFViewer /><PDFDownloadLink /><EditList /><DialogField />'
    );
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
