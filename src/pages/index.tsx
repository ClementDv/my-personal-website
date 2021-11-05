import Head from 'next/head';
import React from 'react';
import {About} from '../components/layout/about';
import {Course} from '../components/layout/course';
import {Header} from '../components/layout/header';
import {Project} from '../components/layout/project';
import {Skills} from '../components/layout/skills';
import {Footer} from '../components/layout/footer';
import {Transition} from '../components/layout/transition';

export default function IndexPage() {
    return (
        <>
            <Header />
            <Transition type='first' />
            <About />
            <Skills />
            <Transition type='last' />
            <Course />
            <Project />
            <Footer />
        </>
    );
}
