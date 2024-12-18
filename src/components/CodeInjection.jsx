import React, { useState } from 'react';

const CodeInjection = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle code injection submission
        console.log('Injected Code:', { html, css, js });
    };

    return (
        <div>
            <h2>Custom Code Injection</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>HTML:</label>
                    <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
                </div>
                <div>
                    <label>CSS:</label>
                    <textarea value={css} onChange={(e) => setCss(e.target.value)} />
                </div>
                <div>
                    <label>JavaScript:</label>
                    <textarea value={js} onChange={(e) => setJs(e.target.value)} />
                </div>
                <button type="submit">Inject Code</button>
            </form>
        </div>
    );
};

export default CodeInjection;
