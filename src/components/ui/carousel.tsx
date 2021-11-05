import React, {ForwardedRef, forwardRef, ReactNode} from 'react';
import classNames from 'classnames';
import styles from './carousel.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export interface CarouselProps<T = any> {
    singleFrame: boolean;
    controls?: CarouselControls;
    currentFrame: number;
    dataSource: T[];
    dataKey: string;
    renderData: (data: T, props: CarouselProps<T>) => ReactNode;
}

export interface CarouselControls {
    onSwipedLeft?: () => void;
    onSwipedRight?: () => void;
}

export const Carousel = forwardRef(function Carousel(carouselProps: CarouselProps, ref: ForwardedRef<HTMLDivElement>) {
    const {singleFrame, controls, currentFrame, dataKey, dataSource, renderData} = carouselProps;

    return (
        <div ref={ref} className={classNames(styles.carouselDisplay, {[styles.halfPart]: !singleFrame})}>
            {!controls ? undefined : <SwipeButtons controls={controls} />}
            <div className={styles.carousel} style={{left: -100 * currentFrame + '%'}}>
                {dataSource.map((data) => (
                    <div key={data[dataKey]} className={styles.frame}>
                        {renderData(data, carouselProps)}
                    </div>
                ))}
            </div>
        </div>
    );
});

interface SwipeButtonsProps {
    controls: CarouselControls;
}

function SwipeButtons({controls}: SwipeButtonsProps) {
    return (
        <>
            <div className={classNames(styles.buttonSwipeLeft, styles.unselect)} onClick={controls.onSwipedLeft}>
                <FontAwesomeIcon className={styles.chevronLeftIcon} icon={faChevronLeft} />
            </div>
            <div className={classNames(styles.buttonSwipeRight, styles.unselect)} onClick={controls.onSwipedRight}>
                <FontAwesomeIcon className={styles.chevronRightIcon} icon={faChevronRight} />
            </div>
        </>
    );
}
