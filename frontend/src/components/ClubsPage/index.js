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
            <ul style={{ margin: 'auto', width: '60%' }}>
                {clubs?.map((club, index) => (
                    <li key={index}>
                        <Club club={club} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
