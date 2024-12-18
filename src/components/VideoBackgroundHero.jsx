import React from 'react';

const VideoBackgroundHero = () => {
    return (
        <section className="hero">
            <video autoPlay loop muted>
                <source src="path/to/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1>Video Background Hero</h1>
            {/* Add additional content and styling here */}
        </section>
    );
};

export default VideoBackgroundHero;
