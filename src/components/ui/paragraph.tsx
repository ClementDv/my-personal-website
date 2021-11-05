import React, {ForwardedRef, forwardRef, HTMLProps} from 'react';
import styles from './paragraph.module.scss';
import classNames from 'classnames';

export const Paragraph = forwardRef(function Paragraph(
    props: HTMLProps<HTMLParagraphElement>,
    ref: ForwardedRef<HTMLParagraphElement>
) {
    const className = classNames(styles.p, props.className);
    return <p {...props} ref={ref} className={className} />;
});
