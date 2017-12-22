import React from 'react';
import {render, configure} from 'enzyme';
import RepositoryList from './RepositoryList';

import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('RepositoryList', () => {

    it('Should render a loading message', () => {
        const respositoryList = render(
            <RepositoryList.WrappedContent data={[]} total={0} loading={true} queried={false} search={'test'}/>
        );

        expect(respositoryList.find('HintMessage').length).toEqual(1);
    });
});
