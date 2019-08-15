import React from 'react';
import ImageList from "./ImageList";
import { render, mount } from 'enzyme'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter} from "react-router-dom";

describe('ImageList ', () => {

    const mockFoundImages = [
        {
            id: '123',
            urls:{
                regular: 'some.jpg'
            },
            alt_description: 'alt'
        }
    ];

    beforeEach(function () {
        // mockGetCollection.mockClear();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<ImageList foundImages={mockFoundImages}/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
