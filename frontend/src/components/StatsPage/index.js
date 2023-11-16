import React from 'react';
import './index.css';

export default function StatsPage() {
    const [stats, setStats] = React.useState([
        { name: 'Name', value: 'Samiyah Hubbard' },
        { name: 'Position', value: 'Outside Hitter' },
        { name: 'Birthdate', value: '01-01-2023' },
        { name: 'Height', value: '192cm' },
        { name: 'Weight', value: '73kg' },
        { name: 'Spike', value: '320cm' },
        { name: 'Block', value: '310cm' },
        { name: 'Dominant Hand', value: 'Right' }
    ]);

    return (
        <div className="stats-container" id='stats'>
            <div style={{
                width: '60%',
                minHeight: '400px',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                margin: 'auto auto',
                borderRadius: '20px',
                boxShadow: '2px 2px 10px black',
                padding: '64px',
                color: 'white',
                zIndex: '2'
            }}>
                <h2 style={{
                    margin: '0 36px',
                    padding: '32px 0px 16px',
                    borderBottom: '1px solid white'
                }}>Stats</h2>
                <ul style={{
                    padding: '0 36px'
                }}>
                    {stats?.map((stat, index) => (
                        <li key={index}>
                            { stat.name }: <span>{ stat.value }</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
