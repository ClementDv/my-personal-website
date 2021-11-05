import classnames from 'classnames';
import React, {ForwardedRef, forwardRef, HTMLProps} from 'react';
import styles from './title.module.scss';

export type TitleProps = {
    align?: 'left' | 'center';
    color?: 'primary' | 'inverted';
    separator?: boolean;
} & HTMLProps<HTMLHeadingElement>;

export const Title = forwardRef(function Title(
    {align = 'left', color = 'primary', separator = true, ...props}: TitleProps,
    ref: ForwardedRef<HTMLHeadingElement>
) {
    const className = classnames(
        styles.title,
        styles['align-' + align],
        styles['color-' + color],
        styles['separator-' + separator],
        props.className
    );
    return (
        <div className={styles['container-' + align]}>
            <h1 {...props} ref={ref} className={className} />
        </div>
    );
});
