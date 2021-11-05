import React from 'react';
import styles from './transition.module.scss';

export interface TransitionProps {
    type: 'first' | 'last';
}

export function Transition({type}: TransitionProps) {
    return <div className={styles.transition + ' ' + styles[type]} />;
}
