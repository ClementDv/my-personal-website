import Image from 'next/image';
import React, {PropsWithChildren, ReactNode} from 'react';
import logoEpitech from '../../assets/images/course/logo-epitech.png';
import logoLycee from '../../assets/images/course/logo-lycee-elie-vinet.jpg';
import logoOpenclassroom from '../../assets/images/course/logo-openclassrooms.png';
import {Container} from '../ui/container';
import {Paragraph} from '../ui/paragraph';
import {Title} from '../ui/title';
import styles from './course.module.scss';

export function Course() {
    return (
        <section id='course' className={styles.course}>
            <Container type='center'>
                <Title align='center'>
                    <small>Mon</small>Parcours
                </Title>
                <div className={styles.structureTop}>
                    <Cell img={logoLycee} date='2014-2017' degree='Baccalauréat Scientifique' />
                    <Cell img={logoEpitech} date='2017-2019' degree='1ère et 2ème année' />
                    <Cell
                        img={logoOpenclassroom}
                        date='2020-2021'
                        degree={<b>Diplôme développeur d’application JAVA</b>}
                    />
                </div>

                <hr className={styles.separator} />

                <div className={styles.structureBot}>
                    <Question title={'Pourquoi ce parcours ?'}>
                        Après la réussite de mon Bac j’ai voulu faire de <b>ma passion mon métier </b>
                        c’est pourquoi j’ai choisi l’informatique, j’ai validé mes premières compétences avec Epitech.
                        Puis, j’ai souhaité me <b>spécialiser en langage Java</b>, formation que j’ai effectuée avec
                        OpenClassroom.
                    </Question>
                    <Question title={'Pourquoi Java ?'}>
                        J’ai choisi java afin de développer la <b>partie Backend</b> des projets. J’ai aussi été séduis
                        par la formation, j’ai pu apprendre à <b>mener des projets</b>, les <b>structurer</b>, les{' '}
                        <b>développer</b>, les <b>tester</b>, les <b>documenter</b> et les <b>présenter</b> en{' '}
                        <b>respectant les attentes client</b>.
                        <br />
                        <br />
                        Vous pouvez retrouver la présentation de la formation en{' '}
                        <a
                            href='https://openclassrooms.com/fr/paths/513-developpeur-dapplication-java'
                            target='_blank'
                            rel='noreferrer'
                        >
                            cliquant ici
                        </a>
                        .
                    </Question>
                    <Question title={'À l’avenir ?'}>
                        Je <b>recherche un emploi</b> en tant que développeur Java pour pouvoir mettre en œuvre mes
                        compétences. Je suis <b>extrêmement motivé</b> et en parallèle je continue à <b>m’informer</b>{' '}
                        et à <b>développer mes capacités</b>.
                    </Question>
                </div>
            </Container>
        </section>
    );
}

interface CellProps {
    img: string | StaticImageData;
    date: ReactNode;
    degree: ReactNode;
}

function Cell({img, date, degree}: CellProps) {
    return (
        <div className={styles.cell}>
            <Image alt='Logo école' src={img} width={500} height={80} />
            <h3>{date}</h3>
            <h2>{degree}</h2>
        </div>
    );
}

interface QuestionProps {
    title: ReactNode;
}

function Question({title, children}: PropsWithChildren<QuestionProps>) {
    return (
        <div className={styles.question}>
            <h2>{title}</h2>
            <Paragraph>{children}</Paragraph>
        </div>
    );
}
