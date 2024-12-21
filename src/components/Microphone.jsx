import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useTextContext } from './TextContext';

const Microphone = () => {
    const { updateText } = useTextContext();
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [listening, setListening] = useState(false);
    const [cn, setCn] = useState('');

    const handleClick = () => {
        if (!listening) {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            setListening(true);
            setCn('mic-active');
        } else {
            SpeechRecognition.stopListening();
            setListening(false);
            updateText(transcript); 
            setCn('');
        }
    };

    return (
        <div className="microphone-section">
            <button className={`mic ${cn}`} onClick={handleClick}>
                <i className="fa-solid fa-microphone"></i>
            </button>
        </div>
    );
};

export default Microphone;