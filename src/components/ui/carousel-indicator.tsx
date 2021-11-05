import React, {useCallback} from 'react';
import styles from './carousel-indicator.module.scss';

export interface CarouselIndicatorProps {
    currentFrame: number;
    dataSource: any[];
    onSelect: (frame: number) => void;
}

export function CarouselIndicator({currentFrame, dataSource, onSelect}: CarouselIndicatorProps) {
    return (
        <>
            {dataSource.map((_, index) => (
                <Indicator key={index} index={index} active={currentFrame === index} onSelect={onSelect} />
            ))}
        </>
    );
}

interface IndicatorProps {
    index: number;
    active: boolean;
    onSelect: (frame: number) => void;
}

function Indicator({index, active, onSelect}: IndicatorProps) {
    const handleClick = useCallback(() => onSelect(index), [index, onSelect]);

    return <div className={active ? styles.indicatorFocus : styles.indicatorEmpty} onClick={handleClick} />;
}
