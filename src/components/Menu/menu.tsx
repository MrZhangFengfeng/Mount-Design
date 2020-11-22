import React, { createContext, useState } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';

type onSelectCallback = (selectIndex:number) => void;

export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: onSelectCallback;
}

interface IMenuContext {
    index: number;
    onSelect?: onSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({
    index: 0
})

const Menu:React.FC<MenuProps> = (props) => {
    const {defaultIndex, className, mode, style, children, onSelect} = props

    const [currentActive, setActive] = useState(defaultIndex)

    const handleClick = (index: number) => {
        setActive(index)
        if(onSelect) {
            onSelect(index)
        }
    }

    const passedContext:IMenuContext = {
        index: currentActive || 0,
        onSelect: handleClick
    }

    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu;