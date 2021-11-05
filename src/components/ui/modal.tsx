import classNames from 'classnames';
import ScrollLocker from 'rc-util/lib/Dom/scrollLocker';
import React, {KeyboardEvent, MouseEvent, PropsWithChildren, useCallback, useEffect} from 'react';
import styles from './modal.module.scss';

export interface ModalProps<T = any> {
    visible?: boolean;
    onClose?: () => void;
}

export function Modal(modalProps: PropsWithChildren<ModalProps>) {
    const {children, visible, onClose} = modalProps;

    const handleRef = useCallback(
        (elem: HTMLDivElement) => {
            if (elem && visible) {
                elem.focus();
            }
        },
        [visible]
    );

    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (visible) {
            const scrollLocker = new ScrollLocker({container: document.body});
            scrollLocker.lock();
            return () => scrollLocker.unLock();
        }
    }, [visible]);

    return (
        <div
            className={classNames(styles.modal, visible ? styles.visible : undefined)}
            style={{display: 'none'}}
            tabIndex={-1}
            ref={handleRef}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <div className={styles.content} onClick={handleClick}>
                {children}
            </div>
        </div>
    );
}
