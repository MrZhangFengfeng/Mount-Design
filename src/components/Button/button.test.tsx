import React from 'react';
import {render} from '@testing-library/react';
import Button from './button';

describe('test button component',()=>{
    it('render default button',()=> {
        const wrapper = render(<Button>Hello</Button>)
        const element = wrapper.getByText('Hello')
        // expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
    })
    it('render a button base different props',()=> {
        
    })
    it('render link button width href',()=> {
        
    })
    it('render disabled button',()=> {
        
    })
})