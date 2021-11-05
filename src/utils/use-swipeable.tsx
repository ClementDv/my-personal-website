import {useMemo} from 'react';
import {SwipeableHandlers, SwipeableProps, SwipeCallback, useSwipeable as useSwipeableReal} from 'react-swipeable';
import {SwipeEventData} from 'react-swipeable/src/types';

function isSwipeDisabled() {
    // .ant-scrolling-effect is added to body when a modal is open
    return document.body.classList.contains('ant-scrolling-effect');
}

function wrapSwipeCallback(cb: SwipeCallback) {
    if (!cb) {
        return undefined;
    }

    return (eventData: SwipeEventData) => {
        if (isSwipeDisabled()) {
            return;
        }
        return cb(eventData);
    };
}

export function useSwipeable(options: SwipeableProps): SwipeableHandlers {
    const optionsReal = useMemo(() => {
        return {
            ...options,
            onSwipeStart: wrapSwipeCallback(options.onSwipeStart),
            onSwiped: wrapSwipeCallback(options.onSwiped),
            onSwipedDown: wrapSwipeCallback(options.onSwipedDown),
            onSwipedLeft: wrapSwipeCallback(options.onSwipedLeft),
            onSwipedRight: wrapSwipeCallback(options.onSwipedRight),
            onSwipedUp: wrapSwipeCallback(options.onSwipedUp),
            onSwiping: wrapSwipeCallback(options.onSwiping),
        };
    }, [options]);
    return useSwipeableReal(optionsReal);
}
