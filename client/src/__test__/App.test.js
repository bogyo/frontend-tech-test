import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() });

it('renders isolated component', () => {
  const app = shallow(<App />);
});
