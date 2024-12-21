import React from 'react';
import Textarea from '@mui/joy/Textarea';
import { useTextContext } from './TextContext';

const Text = () => {
    const { text, updateText } = useTextContext();

    const handleChange = (event) => {
        updateText(event.target.value);
    };

    return (
        <div className="text-section">
            <Textarea
                placeholder="Type in here…"
                minRows={2}
                maxRows={4}
                value={text}
                onChange={handleChange}
                style={{
                    width: '50vw',
                    height: '20vh',
                    border: '1px solid #7AB2D3',
                    borderRadius: '5px',
                    padding: '10px',
                }}
            />
        </div>
    );
};

export default Text;
