import React, { useState } from 'react';

const SEOSettings = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle SEO settings submission
        console.log('SEO Settings:', { title, description });
    };

    return (
        <div>
            <h2>SEO Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default SEOSettings;
