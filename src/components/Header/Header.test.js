import React from 'react';
import Header  from "./Header";
import {BrowserRouter} from "react-router-dom";
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Header ', () => {
    const userSubmit = jest.fn();

    it('should render correctly', () => {
        const wrapper = shallow(<BrowserRouter><Header userSubmit={userSubmit}/></BrowserRouter>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

});
