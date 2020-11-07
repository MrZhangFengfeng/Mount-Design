import React from 'react';
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>default</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary</Button>
    </div>
  );
}

export default App;
