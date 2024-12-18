import React, { useState } from 'react';

const LanguageSelector = () => {
    const [language, setLanguage] = useState('en');

    const handleChange = (e) => {
        setLanguage(e.target.value);
        // Handle language change logic
        console.log('Selected Language:', e.target.value);
    };

    return (
        <div>
            <h2>Select Language</h2>
            <select value={language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                {/* Add more languages as needed */}
            </select>
        </div>
    );
};

export default LanguageSelector;
