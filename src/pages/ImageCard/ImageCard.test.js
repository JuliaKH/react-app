import React from 'react';
import ImageCard  from "./ImageCard";
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import axios from 'axios';

describe('ImageCard ', () => {

    module.exports = {
        get: jest.fn(() => {
            return Promise.resolve({
                data: [
                    {
                        urls: {
                            regular: 'some.jpg'
                        }
                    }
                ]
            })
        })
    };
    jest.mock('axios');


    it('should render correctly', () => {
        const wrapper = shallow(<ImageCard />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should fetch a image', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const wrapper = shallow(<ImageCard />);
        expect(getSpy).toBeCalled()
    });

    it('should call componentDidMount', () => {
        jest.spyOn(ImageCard.prototype, 'componentDidMount');
        const wrapper = shallow(<ImageCard />);
        expect(ImageCard.prototype.componentDidMount.mock.calls.length).toBe(1);
    });

});
