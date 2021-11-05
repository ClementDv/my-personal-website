import styles from './wave-separator.module.scss';

export function WaveSeparator() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 135.2' fill='none' className={styles.svg}>
            <path d='M1920 135.2v-92c4-6.3-276.5 97.1-960 0-683.5-97.2-960 0-960 0v92.1h1920z' />
            <path d='M1920 135.2V62.9s-275 112.2-960 0-960 0-960 0v72.4h1920z' />
            <path d='M1920 135.2v-54s-275 106.2-960 0-960 0-960 0v54h1920z' />
        </svg>
    );
}
