import React from 'react';
import TestRenderer from 'react-test-renderer';
import Circle from './index';

describe('Circle', () => {
    it('should render default state', () => {
        const component = TestRenderer.create(<Circle />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render state with props', () => {
        const component = TestRenderer.create(
            <Circle
                color="color_mock"
                borderColor="border_color_mock"
                size={42}
                dataAutomations="data_automations_mock"
                className="class_name_mock"
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    });
});
