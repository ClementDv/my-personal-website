import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {PropsWithChildren} from 'react';
import {Button} from '../ui/button';
import {Title} from '../ui/title';
import styles from './contact.module.scss';

export interface ContactProps {
    onClose: () => void;
}

export function Contact({onClose}: ContactProps) {
    return (
        <aside className={styles.contact}>
            <button className={styles.closeButton} onClick={onClose}>
                <FontAwesomeIcon className={styles.closeIcon} icon={faTimes} />
            </button>
            <div className={styles.content}>
                <Title align={'center'} color={'inverted'} separator={false}>
                    <small>Me</small>Contacter
                </Title>
                <div className={styles.fieldWrapper}>
                    <Field
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        href='https://www.linkedin.com/in/clément-poirier-dev/'
                    >
                        @clément-poirier-dev
                    </Field>
                    <Field icon={<FontAwesomeIcon icon={faEnvelope} />} href='mailto:clement@poirier.io'>
                        clément
                        <span className={styles.breakHere}>@poirier.io</span>
                    </Field>
                </div>
            </div>
        </aside>
    );
}

interface FieldProps {
    icon: React.ReactNode;
    href: string;
}

function Field({icon, href, children}: PropsWithChildren<FieldProps>) {
    return (
        <Button className={styles.button} type={'ghost'} href={href} target='_blank' rel={'_norefer'}>
            <span className={styles.buttonIcon}>{icon}</span>
            {children}
        </Button>
    );
}
