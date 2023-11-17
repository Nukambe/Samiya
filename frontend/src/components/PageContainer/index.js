import React from 'react';
import MediaQueryContext from "../../context/MediaQueries"

export default function PageContainer({ children, id, background='', top }) {
    const mediaQueries = React.useContext(MediaQueryContext);

    return (
        <div
            id={id}
            style={{
                width: '100%',
                height: '100vh',
                background: background,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: mediaQueries.desktop ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                position: 'relative',
                top: top
            }}>
            {children}
        </div>
    )
}
