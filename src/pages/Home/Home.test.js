import React from 'react';
import { render, mount } from 'enzyme'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Home from "./Home";

describe('CollectionPage ', () => {

    const mockUserSubmit = jest.fn(() => 'Set new query');
    const mockFoundImages = [
        {
            id: '123',
            urls:{
                regular: 'some.jpg'
            },
            alt_description: 'alt'
        }
    ];

    it('should render correctly', () => {
        const wrapper = shallow(<Home foundImages={mockFoundImages} userSubmit={mockUserSubmit}/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

});
