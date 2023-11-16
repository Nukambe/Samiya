import React from 'react';
import { useMediaQuery } from 'react-responsive';

const MediaQueryContext = React.createContext();

export function MediaQueryProvider({ children }) {
    const mediaQueries = {
        desktop: useMediaQuery({ minWidth: 992 }),
        tablet: useMediaQuery({ minWidth: 768, maxWidth: 991 }),
        phone: useMediaQuery({ maxWidth: 767 })
    };

    return (
        <MediaQueryContext.Provider value={mediaQueries}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export default MediaQueryContext;
