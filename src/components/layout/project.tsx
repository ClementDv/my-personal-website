import {config} from '@fortawesome/fontawesome-svg-core';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, {useCallback, useState} from 'react';
import LogoMediscreen from '../../assets/images/project/mediscreen/logo.png';
import ImageFrameMediscreen from '../../assets/images/project/mediscreen/frame.jpg';
import LogoTourGuide from '../../assets/images/project/tourguide/logo.png';
import ImageFrameTourGuide from '../../assets/images/project/tourguide/frame.jpg';
import LogoPoseidon from '../../assets/images/project/poseidon/logo.png';
import ImageFramePoseidon from '../../assets/images/project/poseidon/frame.jpg';
import LogoPaymybuddy from '../../assets/images/project/paymybuddy/logo.png';
import ImageFramePaymybuddy from '../../assets/images/project/paymybuddy/frame.jpg';
import {useClientWidth} from '../../utils/use-client-width';
import {useSwipeable} from '../../utils/use-swipeable';
import {Carousel, CarouselProps} from '../ui/carousel';
import {CarouselIndicator} from '../ui/carousel-indicator';
import {Container} from '../ui/container';
import {Modal} from '../ui/modal';
import {Paragraph} from '../ui/paragraph';
import {Title} from '../ui/title';
import styles from './project.module.scss';

interface ProjectDescription {
    id: string;
    logo: StaticImageData | string;
    description: string;
    technologies: string;
    findOutMore: string;
    codeLink: string;
    imageFrame?: StaticImageData | string;
}

const projectDescriptions: ProjectDescription[] = [
    {
        id: 'p1',
        logo: LogoMediscreen,
        description:
            'Application pour aider les médecins à gérer leurs patients et leur ' +
            "permettre d'évaluer les risques de développer du diabète en utilisant l’historique " +
            'des notes post-visites.',
        technologies:
            'Java, SpringBoot, TypeScript, Lombok, Mapstruct, Git, Maven, Jacoco, JUnit, OpenApi, Swagger, Angular, ' +
            'Docker, MongoDb, MySql.',
        findOutMore:
            "Le projet a été dirigé à l'aide d'un tableau Kanban. Une interface utilisateur est disponible. " +
            "L'application est déployable via docker et est construite en microservices.",
        codeLink: 'https://github.com/ClementDv/OpCl-JAVA-P9',
        imageFrame: ImageFrameMediscreen,
    },
    {
        id: 'p2',
        logo: LogoTourGuide,
        description:
            'Application de voyage qui récompense les utilisateurs en fontion des lieux fréquentés. ' +
            "Le but du projet est d'améliorer les performances de l'application afin de pouvoir gérer un flux " +
            'important de personnes.',
        technologies: 'Java, SpringBoot, Git, Maven, Jacoco, Lombok, MapStruct, JUnit, OpenApi, Swagger, Docker.',
        findOutMore:
            "Les utilisateurs sont générés afin de pouvoir gérer le flux. L'application est déployable via docker et " +
            'est construite en microservices.',
        codeLink: 'https://github.com/ClementDv/OpCl-Java-P8',
        imageFrame: ImageFrameTourGuide,
    },
    {
        id: 'p3',
        logo: LogoPoseidon,
        description:
            "Application de finance qui permet de gérer les transferts et l'affichage des actions mises en ligne.",
        technologies: 'Java, SpringBoot, SpringSecurity, JpaRepository, Thymeleaf, Git, Maven, Jacoco, JUnit, MySql.',
        findOutMore:
            "Une interface utilisateur est disponnible. Pour accéder à l'application il faut être authentifié.",
        codeLink: 'https://github.com/ClementDv/OpCl-JAVA-P7',
        imageFrame: ImageFramePoseidon,
    },
    {
        id: 'p4',
        logo: LogoPaymybuddy,
        description:
            "Application de paiement où les transactions peuvent s'effectuer entre utilisateurs mais aussi avec sa " +
            'banque. Pour effectuer une opération il faut être connecté à son compte.',
        technologies:
            'Java, SpringBoot, SpringSecurity, Liquibase, JpaRepository, Git, Maven, Jacoco, JUnit, MySql, Swagger, ' +
            'OpenApi.',
        findOutMore:
            "La base de données est générée automatiquement grâce à Liquibase pour MySQL. L'authentification est gérée" +
            ' via Json Web Token.',
        codeLink: 'https://github.com/ClementDv/OpCl-JAVA-P6',
        imageFrame: ImageFramePaymybuddy,
    },
];

export function Project() {
    const clientWidth = useClientWidth();
    const singleFrame = clientWidth < 1200;

    const [currentFrame, setCurrentIndex] = useState(0);
    const onSwipedLeft = useCallback(
        () => setCurrentIndex(cycle(currentFrame - 1, projectDescriptions.length)),
        [currentFrame]
    );
    const onSwipedRight = useCallback(
        () => setCurrentIndex(cycle(currentFrame + 1, projectDescriptions.length)),
        [currentFrame]
    );

    const handlers = useSwipeable({
        onSwipedLeft: onSwipedRight,
        onSwipedRight: onSwipedLeft,
        ...config,
    });

    return (
        <section id='projects' className={styles.project}>
            <Container>
                <Title align={'center'} color={'inverted'}>
                    <small>Mes</small>Projets
                </Title>
                <Paragraph className={styles.information}>
                    Tous les <b>projets</b> de ma formation sont <b>disponibles</b> sur mon{' '}
                    <a href='https://github.com/ClementDv/' rel='noreferrer' target='_blank'>
                        <b>Github</b>
                    </a>
                    .
                </Paragraph>
            </Container>
            <div {...handlers} className={styles.carouselWrapper}>
                {singleFrame ? undefined : (
                    <Carousel
                        singleFrame={singleFrame}
                        currentFrame={currentFrame}
                        dataSource={projectDescriptions}
                        dataKey='id'
                        renderData={renderProjectImage}
                    />
                )}
                <Carousel
                    singleFrame={singleFrame}
                    controls={{onSwipedLeft, onSwipedRight}}
                    currentFrame={currentFrame}
                    dataSource={projectDescriptions}
                    dataKey='id'
                    renderData={renderProjectDescription}
                />
            </div>
            <div className={styles.indicatorWrapper}>
                <CarouselIndicator
                    currentFrame={currentFrame}
                    dataSource={projectDescriptions}
                    onSelect={setCurrentIndex}
                />
            </div>
        </section>
    );
}

function cycle(value, count) {
    return (value + count) % count;
}

function renderProjectDescription(props: ProjectDescription, {singleFrame}: CarouselProps) {
    return <ProjectDescriptionContent {...props} singleFrame={singleFrame} />;
}

type ProjectDescriptionContentProps = {
    singleFrame: boolean;
} & ProjectDescription;

function ProjectDescriptionContent({
    logo,
    description,
    technologies,
    findOutMore,
    codeLink,
    imageFrame,
    singleFrame,
}: ProjectDescriptionContentProps) {
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const showImageModal = useCallback(() => setImageModalVisible(true), []);
    const hideImageModal = useCallback(() => setImageModalVisible(false), []);

    return (
        <div className={styles.descriptionFrame}>
            <Image
                src={logo}
                alt={'logo from my project'}
                width={500}
                height={100}
                objectFit={'contain'}
                objectPosition={'center'}
            />
            <Paragraph className={styles.description}>{description}</Paragraph>
            <div className={styles.informationWrapper}>
                <div className={styles.technologies}>
                    <h3>Technologies utilisées</h3>
                    {technologies}
                </div>
                <div className={styles.findOutMore}>
                    <h3>En savoir plus</h3>
                    {findOutMore}
                </div>
            </div>
            <div className={singleFrame ? styles.showThumbnail : undefined}>
                <a href={codeLink} target='_blank' rel='noreferrer'>
                    Voir le code <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
                {singleFrame ? (
                    <div className={styles.thumbnail} onClick={showImageModal}>
                        <Image src={imageFrame} alt={'image project thumbnail'} objectFit={'fill'} />
                    </div>
                ) : undefined}
            </div>
            <Modal visible={imageModalVisible} onClose={hideImageModal}>
                <div className={styles.imageModal}>
                    <Image
                        src={imageFrame}
                        alt={'image of the project'}
                        objectFit={'contain'}
                        objectPosition={'center'}
                    />
                </div>
            </Modal>
        </div>
    );
}

function renderProjectImage(projectDescription: ProjectDescription) {
    return RenderProjectImage(projectDescription);
}

function RenderProjectImage({imageFrame}: ProjectDescription) {
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const showImageModal = useCallback(() => setImageModalVisible(true), []);
    const hideImageModal = useCallback(() => setImageModalVisible(false), []);

    return (
        <>
            <div className={styles.imageFrame} onClick={showImageModal}>
                <Image
                    src={imageFrame}
                    alt={'image of the project'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    layout={'fill'}
                />
            </div>
            <Modal visible={imageModalVisible} onClose={hideImageModal}>
                <div className={styles.imageModal} onClick={hideImageModal}>
                    <Image
                        src={imageFrame}
                        alt={'image of the project'}
                        objectFit={'contain'}
                        objectPosition={'center'}
                    />
                </div>
            </Modal>
        </>
    );
}
