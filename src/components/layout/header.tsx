import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import avatar from '../../assets/images/header/avatar.jpg';
import styles from './header.module.scss';

const navLinks: NavLinkProps[] = [
    {id: 'about', name: 'À propos'},
    {id: 'skills', name: 'Mes compétences'},
    {id: 'course', name: 'Mon parcours'},
    {id: 'projects', name: 'Mes projets'},
];

export function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const [navSticky, setStickyNav] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState(undefined);

    useEffect(() => {
        const navHeight = navRef.current.getBoundingClientRect().height;

        const findActiveSectionId = () => {
            for (let i = navLinks.length - 1; i >= 0; --i) {
                const {id} = navLinks[i];
                const sectionEl = document.getElementById(id);
                if (sectionEl && sectionEl.getBoundingClientRect().top <= 120) {
                    return id;
                }
            }
            return undefined;
        };

        const onScroll = () => {
            const headerBottom = headerRef.current.getBoundingClientRect().bottom;
            setStickyNav(headerBottom < navHeight);

            const activeSectionId = findActiveSectionId();
            setActiveSectionId(activeSectionId);
            setLocationHash(activeSectionId ? '#' + activeSectionId : '');
        };

        window.addEventListener('scroll', onScroll, false);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header ref={headerRef} className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.avatar}>
                        <Image
                            alt='Photo Clément POIRIER'
                            src={avatar}
                            width={200}
                            height={200}
                            objectFit='cover'
                            objectPosition='50% 31%'
                        />
                    </div>
                    <ul className={styles.links}>
                        <li>
                            <a href='https://www.linkedin.com/in/clément-poirier-dev' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/ClementDV' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                    <div className={styles.name}>Clément POIRIER</div>
                    <div className={styles.desc}>
                        <div className={styles.left}>
                            <small>Je suis un</small>
                            <br />
                            Développeur
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.right}>
                            Java
                            <br />
                            Web & React
                        </div>
                    </div>
                </div>
            </header>
            <nav ref={navRef} className={styles.navbar + (navSticky ? ' ' + styles.sticky : '')}>
                <ul>
                    {navLinks.map((props) => (
                        <NavLink key={props.id} {...props} active={activeSectionId === props.id} />
                    ))}
                </ul>
            </nav>
        </>
    );
}

interface NavLinkProps {
    id: string;
    name: string;
    active?: boolean;
}

function NavLink({id, name, active}: NavLinkProps) {
    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            const sectionEl = document.getElementById(id);
            if (sectionEl) {
                sectionEl.scrollIntoView({behavior: 'smooth'});
            }
        },
        [id]
    );
    return (
        <li key={id}>
            <a href={'#' + id} onClick={handleClick} className={active ? styles.anchorFocus : ''}>
                {name}
            </a>
        </li>
    );
}

function setLocationHash(hash) {
    if (window.location.hash !== hash) {
        window.history.replaceState(null, null, window.location.pathname + hash);
    }
}
