import React from 'react'
import classNames from 'classnames'
import { worker } from 'cluster'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning',
    Error = 'error',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

// 获取到原生element的属性  同时 使用 & 将两个类合并  类似object.assign
// button
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>
// a
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement>
// Partial  typescript的属性  将参数都变为可选的。  因为有些button属性 不是a链接 所拥有的   反之亦然
export type ButtonProps = Partial<BaseButtonProps & NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) =>{
    const { disabled, size, className, btnType, children, href, ...restProps} = props

    // btn btn-lg btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    // 因为button本身 自带有 disabled属性  所以直接加，a标签没  所以disabled放在CSS中体现
    if(btnType === ButtonType.Link && href) {
        return <a className={classes} href={href} {...restProps}>{children}</a>
    } else {
        return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
// Button.propTypes  = {
//     disabled: PropTypes.bool
// }

export default Button