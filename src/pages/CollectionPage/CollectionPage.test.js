import React from 'react';
import { render, mount } from 'enzyme'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter} from "react-router-dom";
import CollectionPage from "./CollectionPage";
import axios from "axios";

describe('CollectionPage ', () => {

    module.exports = {
        get: jest.fn(() => {
            return Promise.resolve({
                data: [
                    {
                        id: 1,
                        urls: {
                            regular: 'some.jpg'
                        },
                        alt_description: 'alt'
                    }
                ]
            })
        })
    };
    jest.mock('axios');


    it('should render correctly', () => {
        const wrapper = shallow(<CollectionPage/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should call componentDidMount', () => {
        jest.spyOn(CollectionPage.prototype, 'componentDidMount');
        const wrapper = shallow(<CollectionPage />);
        expect(CollectionPage.prototype.componentDidMount.mock.calls.length).toBe(1);
    });

    it('should fetch a image', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const wrapper = shallow(<CollectionPage />);
        expect(getSpy).toBeCalled()
    });

});
