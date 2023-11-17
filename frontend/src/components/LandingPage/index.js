import React from 'react';
import MediaQueryContext from '../../context/MediaQueries';
import PageContainer from '../PageContainer';
import './index.css';
import Arrow from '../../assets/down-arrow.png';

export default function LandingPage() {
    const mediaQueries = React.useContext(MediaQueryContext);

    return (
        <PageContainer
            id={'landing'}
            top={-56}
            background={"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('https://img.olympics.com/images/image/private/t_s_w1340/t_s_16_9_g_auto/f_auto/v1536936974/primary/exvzqcvorticinejmmel')"}
        >
                <div className='landing-content'
                    style={{
                        width: '80%',
                        margin: 'auto auto 0',
                        height: '400px',
                    }}>
                    <div style={{
                        width: '50%'
                    }}>
                        <h1 style={{
                            margin: 0,
                            fontSize: '5em'
                        }}>Samiyah</h1>
                        <h1 style={{
                            margin: 0,
                            fontSize: '5em',
                            textAlign: 'center'
                        }}>Hubbard</h1>
                    </div>
                    <div style={{ width: '50%', maxWidth: '600px' }}>
                        <ul className='landing-list'>
                            <li>Outside Hitter</li>
                            <li>Height: <span>192cm</span></li>
                            <li>Weight: <span>73kg</span></li>
                            <li>Spike: <span>320cm</span></li>
                            <li>Block: <span>310cm</span></li>
                        </ul>
                    </div>
                </div>
                <img src={Arrow} alt='Down arrow' className='down-arrow' style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    width: '64px',
                }} />
                </PageContainer>
    );
};
