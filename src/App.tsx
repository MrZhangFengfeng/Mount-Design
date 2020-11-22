import React from 'react';
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import alert from './components/Alert/index';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/MenuItem';

function App() {
 
  return (
    <div>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>default</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary</Button>

        {
           alert.success('success~~~~~','lalalalall')
        }

        <Menu defaultIndex={0} onSelect={(index) => {console.log(index)}}>
          <MenuItem index={0}>
             11111
          </MenuItem>
          <MenuItem index={1} disabled>
            22222222
          </MenuItem>
          <MenuItem index={2}>
            33333
          </MenuItem>
        </Menu>

        <Menu defaultIndex={0}
              onSelect={(index) => {console.log(index)}}
              mode="vertical">
          <MenuItem index={0}>
             aaaa
          </MenuItem>
          <MenuItem index={1}>
            bbbbbbbbb
          </MenuItem>
          <MenuItem index={2}>
            cccccccccc
          </MenuItem>
        </Menu>

    </div>
  );
}

export default App;
