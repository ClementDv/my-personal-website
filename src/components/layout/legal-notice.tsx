import React from 'react';
import {Container} from '../ui/container';
import {Paragraph} from '../ui/paragraph';
import {Title} from '../ui/title';
import styles from './legal-notice.module.scss';

export function LegalNotice() {
    return (
        <div className={styles.legalNotice}>
            <Container className={styles.container}>
                <Title className={styles.title} align={'center'}>
                    Mentions légales
                </Title>
                <div className={styles.category}>
                    <ParagraphTitle>Éditeur du site</ParagraphTitle>
                    <Paragraph>Éditeur du site : Clément POIRIER</Paragraph>
                    <Paragraph>Contacter l’éditeur du site : clement@poirier.io</Paragraph>
                    <Paragraph>Hébergement : Vercel</Paragraph>
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Description</ParagraphTitle>
                    <p>Le présent site présente Clément POIRIER.</p>
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Droits d’auteur</ParagraphTitle>
                    <Paragraph>
                        Les éléments du site https://clement@poirier.fr incluant les textes, les présentations, les
                        arborescences, algorithmes, mises en forme sont la propriétés de Clément POIRIER, éditeur du
                        site.
                    </Paragraph>
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Données personnelles</ParagraphTitle>
                    <Paragraph>
                        Le présent site est susceptible d’utiliser des cookies et les outils de statistiques peuvent
                        également prendre connaissance de données vous concernant (notamment : adresse I.P., page
                        d’entrée, page de sortie, système d’exploitation utilisé, navigateur utilisé, horaire de
                        consultation…).
                    </Paragraph>
                    <Paragraph>
                        Comme outil de statistiques, ce site utilise notamment Google Analytics. Il est imposé aux sites
                        utilisant ce service de mentionner un texte type pour les visiteurs, texte qui est inséré dans
                        le paragraphe suivant et entre des guillemets :
                    </Paragraph>
                    <Paragraph>
                        « Ce site utilise Google Analytics, un service d’analyse de site internet fourni par Google Inc.
                        ( « Google » ). Google Analytics utilise des cookies , qui sont des fichiers texte placés sur
                        votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses
                        utilisateurs. Les données générées par les cookies concernant votre utilisation du site (y
                        compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux
                        Etats-Unis. Google utilisera cette information dans le but d’évaluer votre utilisation du site,
                        de compiler des rapports sur l’activité du site à destination de son éditeur et de fournir
                        d’autres services relatifs à l’activité du site et à l’utilisation d’Internet. Google est
                        susceptible de communiquer ces données à des tiers en cas d’obligation légale ou lorsque ces
                        tiers traitent ces données pour le compte de Google, y compris notamment l’éditeur de ce site.
                        Google ne recoupera pas votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez
                        désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de votre
                        navigateur. Cependant, une telle désactivation pourrait empêcher l’utilisation de certaines
                        fonctionnalités de ce site. En utilisant ce site internet, vous consentez expressément au
                        traitement de vos données nominatives par Google dans les conditions et pour les finalités
                        décrites ci-dessus. »
                    </Paragraph>
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Liens</ParagraphTitle>
                    Les liens vers le présent site sont autorisés dans la mesure où ils ne portent pas préjudice à son
                    image.
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Icones</ParagraphTitle>
                    Les icones proviennent de Font Awesome.
                </div>
                <div className={styles.category}>
                    <ParagraphTitle>Contact</ParagraphTitle>
                    <Paragraph>clement@poirier.io</Paragraph>
                    <Paragraph>https://www.linkedin.com/in/clément-poirier-dev/</Paragraph>
                </div>
            </Container>
        </div>
    );
}

function ParagraphTitle({children}) {
    return (
        <h3 className={styles.paragraphTitle}>
            <b>{children}</b>
        </h3>
    );
}
