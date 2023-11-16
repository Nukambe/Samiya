import React, { useRef } from 'react';

export default function NavigationLink({ page }) {
    const pageRef = useRef(document.getElementById(page));

    function clickLink(event) {
        event.preventDefault();
        if (!pageRef.current) pageRef.current = document.getElementById(page);
        if (page === 'landing') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            pageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a className='navlink'
            onClick={e => clickLink(e)}
            style={{
                textDecoration: 'none',
                fontSize: '28px',
                fontWeight: 'bold',
                lineHeight: '56px',
                padding: '0 16px'
            }}
        >
            {page.toUpperCase()}
        </a>
    )
}
