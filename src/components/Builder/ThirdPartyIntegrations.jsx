import React, { useState } from 'react';

const ThirdPartyIntegrations = () => {
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle third-party integration submission
        console.log('Integrating with:', service);
    };

    return (
        <div>
            <h2>Third-party Integrations</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Service:</label>
                    <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
                </div>
                <button type="submit">Integrate</button>
            </form>
        </div>
    );
};

export default ThirdPartyIntegrations;
