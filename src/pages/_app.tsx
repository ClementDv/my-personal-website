import {config as fontawesomeConfig} from '@fortawesome/fontawesome-svg-core';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../assets/styles/global.scss';

fontawesomeConfig.autoAddCss = false;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Clément Poirier</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
