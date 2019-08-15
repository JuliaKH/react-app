import React from 'react';
import Collections  from "./Collections";
import { render, mount } from 'enzyme'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter} from "react-router-dom";

describe('Collections ', () => {
    const mockGetCollection = jest.fn();
    let collectionsMock = [
        {
            title: 'title',
            id: 123,
        }
    ] ;

    beforeEach(function () {
        mockGetCollection.mockClear();
        collectionsMock = [
            {
                title: 'title',
                id: 123,
            }
        ] ;
    });

    it('should render correctly', () => {
        const wrapper = shallow
        (<BrowserRouter>
            <Collections foundCollections={collectionsMock} getCollections={mockGetCollection}/>
        </BrowserRouter>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('calls componentDidMount', () => {
        jest.spyOn(Collections.prototype, 'componentDidMount');
        const wrapper = shallow(<Collections foundCollections={collectionsMock} getCollections={mockGetCollection}/>);
        expect(Collections.prototype.componentDidMount.mock.calls.length).toBe(1);
        expect(mockGetCollection).toHaveBeenCalled();
    });
});
