import React from 'react';
import Club from "./Club";
import './index.css';

export default function ClubsPage() {
    const [clubs, setClubs] = React.useState([
        { name: 'USA Olympic', start: '01/2023', end: 'current' },
        { name: 'Life Pink Spiders', start: '01/2022', end: '01/2023' },
        { name: 'Athletes Unlimited', start: '01/2021', end: '01/2022' },
        { name: 'University of Maryland', start: '01/2020', end: '01/2021' }
    ]);

    return (
        <div className="clubs-container" id="clubs">
            <div style={{
                borderRadius: '20px',
                boxShadow: '2px 2px 10px black',
                width: '60%',
                margin: 'auto',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
            }}>
                <h2 style={{ margin: '0 16px', padding: '32px', color: 'white', borderBottom: '1px solid white' }}>Clubs</h2>
                <ul style={{ margin: 'auto', width: '60%' }}>
                    {clubs?.map((club, index) => (
                        <li key={index}>
                            <Club club={club} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
