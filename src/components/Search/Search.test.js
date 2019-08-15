import React from 'react';
import Search  from "./Search";
import { render, mount } from 'enzyme'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter} from "react-router-dom";

describe('Search ', () => {
    const mockUserSubmit = jest.fn(() => 'Set new query');

    beforeEach(function () {
        mockUserSubmit.mockClear()
    });

    it('should render correctly', () => {
        const wrapper = shallow
        (<BrowserRouter>
            <Search userSubmit={mockUserSubmit}/>
        </BrowserRouter>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('calls userSubmit prop function when form is submitted', () => {
        const wrapper = mount( <BrowserRouter><Search userSubmit={mockUserSubmit}/></BrowserRouter>);
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(mockUserSubmit).toHaveBeenCalledTimes(1);
    });

    it('should user text is echoed in input', () => {
        const wrapper = mount(<BrowserRouter><Search userSubmit={mockUserSubmit}/></BrowserRouter>);
        wrapper.find("input").simulate("change", {target: {value: "hello"}});
        expect(wrapper.find("input").props().value).toEqual("hello");
    });
});
