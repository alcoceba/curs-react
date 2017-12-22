import React from 'react';
import {render, configure} from 'enzyme';
import Header from './Header';

import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('Header', () => {

    it('Should render the header of the page', () => {
        const header = render(
            <Header/>
        );

        expect(header.text()).toEqual('Github Releases');
        expect(header.find('h1').length).toEqual(1);
    });
});
