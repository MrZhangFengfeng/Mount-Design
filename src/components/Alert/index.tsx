import React from 'react';
import Alert, { AlertType } from './alert';
import { checkPropTypes } from 'prop-types';

const alert = {
    success: (title:string, desc:string) => {
        return <Alert alertType={AlertType.Success} title='titleeeeeeeee' desc={'desccccccc'}/>
    }
}

export default alert;