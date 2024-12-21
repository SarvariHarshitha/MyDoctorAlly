import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext();

export const useTextContext = () => useContext(TextContext);

export const TextProvider = ({ children }) => {
    const [text, setText] = useState('');

    const updateText = (data) => {
        setText(data);
    };

    return (
        <TextContext.Provider value={{ text, updateText }}>
            {children}
        </TextContext.Provider>
    );
};
