import React from 'react';
import classNames from 'classnames';

export enum AlertType {
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Fail = 'fail'
}

interface AlertBaseProps {
    className?: string
    alertType?: AlertType;
    title?: string;
    desc?: string;
    close?: boolean;
}
const Alert:React.FC<AlertBaseProps> = (props) =>{
    const {className, alertType, title, desc, close, ...restProps} = props
    const bgClass = classNames('bg', 'alert',className, {
        [`alert_${alertType}`]: alertType
    })
    return (
        <div className={bgClass}>
            <div className='title'>{title}</div>
            <div className='desc'>{desc}</div>
            {close && <div {...restProps} className='icon close'>X</div>}
        </div>
    )

}

Alert.defaultProps = {
    alertType: AlertType.Success,
    close: true
}
export default Alert