import { NavLink, Outlet } from 'react-router-dom';
import { useTextContext } from './TextContext';
import { useState } from 'react';

const Section = () => {
    const { text, updateText } = useTextContext();
    const [activeLink, setActiveLink] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        fetch('https://mydoctorally-backend.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, text }), 
        })
            .then((response) => response.json())
            .then((data) => console.log('Report generated:', data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <div className="section">
                <NavLink
                    to="/"
                    className={`nav-button ${activeLink === 'microphone' ? 'active' : ''} microphone`}
                    onClick={() => setActiveLink('microphone')}
                >
                    Audio
                </NavLink>
                <NavLink
                    to="/text"
                    className={`nav-button ${activeLink === 'text' ? 'active' : ''} text`}
                    onClick={() => setActiveLink('text')}
                >
                    Text
                </NavLink>
            </div>
            <Outlet />
            <div className="generate-report">
                <input
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button className="generate" onClick={handleSubmit}>
                    Generate Report
                </button>
            </div>
        </div>
    );
};

export default Section;
