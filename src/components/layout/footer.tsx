import React, {useCallback, useState} from 'react';
import styles from './footer.module.scss';
import {Paragraph} from '../ui/paragraph';
import {Container} from '../ui/container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {Modal} from '../ui/modal';
import {LegalNotice} from './legal-notice';

export function Footer() {
    const [legalNoticeVisible, setLegalNoticeVisible] = useState(false);
    const showLegalNotice = useCallback(() => setLegalNoticeVisible(true), []);
    const hideLegalNotice = useCallback(() => setLegalNoticeVisible(false), []);

    return (
        <>
            <hr className={styles.separator} />
            <div className={styles.footer}>
                <Container className={styles.container}>
                    <Paragraph>
                        <a href='mailto:clement@poirier.io' target={'_blank'} rel={'noreferrer'}>
                            <FontAwesomeIcon icon={faEnvelope} /> clement@poirier.io
                        </a>
                    </Paragraph>
                    <Paragraph className={styles.legacyNotice}>
                        <span onClick={showLegalNotice}>Mentions légales</span>
                    </Paragraph>
                </Container>
            </div>
            <Modal visible={legalNoticeVisible} onClose={hideLegalNotice}>
                <LegalNotice />
            </Modal>
        </>
    );
}
