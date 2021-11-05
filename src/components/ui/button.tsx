import classNames from 'classnames';
import React, {ForwardedRef, forwardRef} from 'react';
import styles from './button.module.scss';

export type ButtonType = 'primary' | 'ghost';
export type NativeButtonType = 'button' | 'submit' | 'reset';

export interface BaseButtonProps {
    type?: ButtonType;
    className?: string;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, 'type'>;

export type NativeButtonProps = {
    htmlType?: NativeButtonType;
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, 'type'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

export const Button = forwardRef(function Button(
    {type = 'primary', className, htmlType, ...props}: ButtonProps,
    ref: ForwardedRef<any>
) {
    const commonProps = {
        ...props,
        ref,
        className: classNames(className, styles.button, styles['background-' + type]),
        type: htmlType,
    };

    if (props.href) {
        return <a {...commonProps} />;
    } else {
        return <button {...commonProps} />;
    }
});
