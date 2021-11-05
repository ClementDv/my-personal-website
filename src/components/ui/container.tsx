import React, {ForwardedRef, forwardRef, HTMLProps} from 'react';
import styles from './container.module.scss';
import classNames from 'classnames';

export type ContainerProps = {
    type?: 'center';
} & HTMLProps<HTMLDivElement>;

export const Container = forwardRef(function Container(
    {type, ...props}: ContainerProps,
    ref: ForwardedRef<HTMLDivElement>
) {
    const className = classNames(styles.container, props.className, styles['container-' + type]);
    return <div {...props} ref={ref} className={className} />;
});
