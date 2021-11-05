import Image from 'next/image';
import React, {useCallback, useState} from 'react';
import profileImg from '../../assets/images/about/profile.jpg';
import {Button} from '../ui/button';
import {Container} from '../ui/container';
import {Modal} from '../ui/modal';
import {Paragraph} from '../ui/paragraph';
import {Title} from '../ui/title';
import styles from './about.module.scss';
import {Contact} from './contact';
import {WaveSeparator} from './wave-separator';

export function About() {
    const [contactVisible, setContactVisible] = useState(false);
    const showContact = useCallback(() => setContactVisible(true), []);
    const hideContact = useCallback(() => setContactVisible(false), []);

    return (
        <>
            <section id='about' className={styles.section + ' ' + styles.description}>
                <Container>
                    <div className={styles.descContainer}>
                        <Title align='left'>
                            <small>À</small>Propos
                        </Title>
                        <Paragraph>
                            Je suis un développeur de 22 ans, <b>passionné par l’informatique</b> depuis mon plus jeune
                            âge.
                        </Paragraph>
                        <Paragraph>
                            Je suis <b>diplomé en tant que développeur Java</b>. Créatif et persévérant, j’apprécie de
                            découvrir des<b> nouvelles technologies</b>.
                        </Paragraph>
                        <Paragraph>
                            J’aime <b>m’impliquer dans des projets</b>. Au préalable je prends le temps de la reflexion.
                            Je n’hésite pas à utiliser une feuille et un stylo avant d’écrire les premières lignes de
                            code.
                        </Paragraph>
                        <Paragraph>
                            Je suis consciencieux et cherche à m’assurer en permanence de la{' '}
                            <b>propreté de mon code.</b>
                        </Paragraph>
                        <Paragraph>
                            En dehors, je suis quelqu’un <b>d’épanoui</b>, j’aime le sport, passer des moments avec mes
                            amis et regarder des séries.
                        </Paragraph>
                    </div>
                </Container>
                <div className={styles.profileContainer}>
                    <Image alt='Photo Clément Poirier' src={profileImg} layout='fill' objectFit='cover' />
                </div>
            </section>
            <WaveSeparator />
            <section className={styles.section + ' ' + styles.information}>
                <Container>
                    <Paragraph className={styles.textStatus}>
                        Je suis actuellement à la recherche d’un emploi en tant que <b>développeur Java.</b>
                    </Paragraph>
                    <Button onClick={showContact}>Me contacter</Button>
                </Container>
            </section>
            <Modal visible={contactVisible} onClose={hideContact}>
                <Contact onClose={hideContact} />
            </Modal>
        </>
    );
}
