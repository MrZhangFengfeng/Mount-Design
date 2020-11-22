import React from 'react';
import {render, RenderResult, fireEvent, cleanup} from '@testing-library/react';
import Menu, {MenuProps}from './menu';
import MenuItem from './MenuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerticalProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

const createMenu = (props:MenuProps)=>{
    return(
        <Menu {...props}>
            <MenuItem index={0}>active</MenuItem>
            <MenuItem index={1} disabled>disabled</MenuItem>
            <MenuItem index={2}>default</MenuItem>
        </Menu>
    )
}

let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement, defaultElement:HTMLElement;
describe('test menu and menuItem comp', ()=>{
    beforeEach(()=>{
        wrapper = render(createMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
        defaultElement = wrapper.getByText('default');
    })
    it('render menu and menuItem width default props', ()=>{
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('menu test');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('is-active menu-item');
        expect(disabledElement).toHaveClass('is-disabled menu-item');
    })

    it('click item change active and call the callback', () =>{
        fireEvent.click(defaultElement);
        expect(defaultElement).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith(2);

        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);

    })

    it('render vertical mode', ()=>{
        cleanup()  // 清理beforeEach等之前的预处理
        const wrapper = render(createMenu(testVerticalProps));
        const menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    })
})