import React from 'react';
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert/index'

function App() {
  return (
    <div>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>default</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary</Button>

        <Alert title='lalala' desc='I am desccccc' />
        <Alert title='lalala' desc='I am desccccc' close={false}/>
    </div>
  );
}

export default App;
