import React, { useState } from 'react';

const AnalyticsIntegration = () => {
    const [trackingId, setTrackingId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle analytics integration submission
        console.log('Tracking ID:', trackingId);
    };

    return (
        <div>
            <h2>Analytics Integration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tracking ID:</label>
                    <input type="text" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} />
                </div>
                <button type="submit">Integrate Analytics</button>
            </form>
        </div>
    );
};

export default AnalyticsIntegration;
