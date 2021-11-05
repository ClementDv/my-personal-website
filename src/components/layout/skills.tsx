import classNames from 'classnames';
import React, {PropsWithChildren, ReactNode} from 'react';
import {Container} from '../ui/container';
import {Paragraph} from '../ui/paragraph';
import {Title} from '../ui/title';
import styles from './skills.module.scss';

export function Skills() {
    return (
        <section id='skills' className={styles.skills}>
            <div className={styles.separator}>
                <div className={styles['separator-first']} />
                <div className={styles['separator-second']} />
                <div className={styles['separator-third']} />
            </div>
            <Container type='center'>
                <Title align='center'>
                    <small>Mes</small>Compétences
                </Title>
                <div className={styles.structure}>
                    <Cell
                        className={styles.cell + '-one'}
                        title={
                            <>
                                Création
                                <br />
                                d&apos;API
                            </>
                        }
                    >
                        <Paragraph>
                            Développement d’<b>API Restfull</b> avec Java et SpringBoot. Mes applications sont{' '}
                            <b>testées et documentées</b>.
                        </Paragraph>
                    </Cell>
                    <Cell
                        title={
                            <>
                                Gestion de
                                <br />
                                Projets
                            </>
                        }
                        className={styles.cell + '-two'}
                    >
                        <Paragraph>
                            Utilisation des <b>méthodes agiles</b> afin de planifier au mieux la construction des
                            projets. Mise en place d’un <b>tableau Kanban</b> ou de la <b>méthode SCRUM</b>.
                        </Paragraph>
                    </Cell>
                    <Cell title='Interface Utilisateur' className={styles.cell + '-three'}>
                        <Paragraph>
                            Création d’interfaces utilisateurs web afin <b>d’intéragir</b> avec les API. Utilisation de
                            technologies web telles que <b>Angular</b> ou <b>NextJs (React)</b>.
                        </Paragraph>
                    </Cell>
                    <Cell
                        title={
                            <>
                                Déploiement
                                <br />
                                d&apos;API
                            </>
                        }
                        className={styles.cell + '-four'}
                    >
                        <Paragraph>
                            Gestion du déploiement des API avec <b>docker et docker compose</b>. Mise en place{' '}
                            <b>d’architecture microservices</b> afin de facilité le déploiement.
                        </Paragraph>
                    </Cell>
                    <Cell title='Outils' className={styles.cell + '-five'}>
                        <Paragraph>
                            <b>API REST :</b> IntelliJ, Maven, Gradle, SpringBoot, SpringData JPA, Spring Security,
                            Spring Mvc, Jacoco, Mapstruct, lombok, Junit, Mockito, OpenAPI, Swagger
                        </Paragraph>
                        <Paragraph>
                            <b>Web :</b> Html, CSS, JS, TS, React, Angular, NextJs
                        </Paragraph>
                        <Paragraph>
                            <b>Autres :</b> Git, Liquibase, MySql, MongoDB, Docker, docker-compose
                        </Paragraph>
                    </Cell>
                    <Cell title='Personnelles' className={styles.cell + '-six'}>
                        <Paragraph>
                            <b>Anglais courant</b>
                        </Paragraph>
                        <ul>
                            <li>Autonome</li>
                            <li>Curieux</li>
                            <li>Persévérant</li>
                            <li>Ponctuel</li>
                            <li>Adaptatif</li>
                            <li>Compréhensif</li>
                        </ul>
                    </Cell>
                </div>
            </Container>
        </section>
    );
}

interface CellProps {
    title: ReactNode;
    className?: string;
}

function Cell({title, className, children}: PropsWithChildren<CellProps>) {
    return (
        <div className={classNames(className, styles.cell)}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
