import {useEffect, useState} from 'react';

export function useClientWidth(def?: number) {
    const [clientWidth, setClientWidth] = useState(def);

    useEffect(() => {
        const onResize = () => setClientWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', onResize, false);
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return clientWidth;
}
