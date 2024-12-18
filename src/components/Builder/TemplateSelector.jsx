import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const templates = [
    // Headers
    { id: uuidv4(), name: 'Static Header' },
    { id: uuidv4(), name: 'Sticky Header' },
    { id: uuidv4(), name: 'Animated Header' },
    
    // Hero Sections
    { id: uuidv4(), name: 'Static Image Hero' },
    { id: uuidv4(), name: 'Video Background Hero' },
    { id: uuidv4(), name: 'Slideshow Hero' },
    
    // Navigation
    { id: uuidv4(), name: 'Static Sidebar' },
    { id: uuidv4(), name: 'Collapsible Sidebar' },
    { id: uuidv4(), name: 'Sticky Sidebar' },
    
    // Call-to-Action (CTA) Buttons
    { id: uuidv4(), name: 'Simple CTA Button' },
    { id: uuidv4(), name: 'Animated CTA Button' },
    { id: uuidv4(), name: 'Integrated CTA Section' },
    
    // Feature Lists
    { id: uuidv4(), name: 'Icon Feature List' },
    { id: uuidv4(), name: 'Interactive Feature List' },
    { id: uuidv4(), name: 'Grid Feature List' },
    
    // Testimonials
    { id: uuidv4(), name: 'Static Testimonials' },
    { id: uuidv4(), name: 'Carousel Testimonials' },
    { id: uuidv4(), name: 'Grid Testimonials' },
    
    // Pricing Tables
    { id: uuidv4(), name: 'Simple Pricing Table' },
    { id: uuidv4(), name: 'Highlighted Plan Table' },
    { id: uuidv4(), name: 'Detailed Pricing Table' },
    
    // Team Members
    { id: uuidv4(), name: 'Static Team Profiles' },
    { id: uuidv4(), name: 'Carousel Team Profiles' },
    { id: uuidv4(), name: 'Grid Team Profiles' },
    
    // Accordions
    { id: uuidv4(), name: 'Simple Accordion' },
    { id: uuidv4(), name: 'Icon Accordion' },
    { id: uuidv4(), name: 'FAQ Accordion' },
    
    // Blog Posts
    { id: uuidv4(), name: 'Recent Posts' },
    { id: uuidv4(), name: 'Featured Posts Carousel' },
    { id: uuidv4(), name: 'Grid Blog Posts' },
    
    // Forms
    { id: uuidv4(), name: 'Contact Form' },
    { id: uuidv4(), name: 'Newsletter Signup' },
    { id: uuidv4(), name: 'Integrated Map Form' },
    
    // Maps
    { id: uuidv4(), name: 'Static Map' },
    { id: uuidv4(), name: 'Interactive Map' },
    { id: uuidv4(), name: 'Custom Marker Map' },
    
    // Countdown Timers
    { id: uuidv4(), name: 'Event Countdown' },
    { id: uuidv4(), name: 'Launch Countdown' },
    { id: uuidv4(), name: 'Urgency Countdown' },
    
    // Image Galleries
    { id: uuidv4(), name: 'Grid Gallery' },
    { id: uuidv4(), name: 'Carousel Gallery' },
    { id: uuidv4(), name: 'Lightbox Gallery' },
    
    // Video Embeds
    { id: uuidv4(), name: 'Static Video Embed' },
    { id: uuidv4(), name: 'Custom Thumbnail Video' },
    { id: uuidv4(), name: 'Video Carousel' },
    
    // Social Media Feeds
    { id: uuidv4(), name: 'Static Social Feed' },
    { id: uuidv4(), name: 'Social Media Carousel' },
    { id: uuidv4(), name: 'Grid Social Feed' },
    
    // Tabs
    { id: uuidv4(), name: 'Simple Tabs' },
    { id: uuidv4(), name: 'Animated Tabs' },
    { id: uuidv4(), name: 'Icon Tabs' },
    
    // Progress Bars
    { id: uuidv4(), name: 'Simple Progress Bar' },
    { id: uuidv4(), name: 'Colored Progress Bar' },
    { id: uuidv4(), name: 'Labeled Progress Bar' },
    
    // Sliders
    { id: uuidv4(), name: 'Range Slider' },
    { id: uuidv4(), name: 'Labeled Slider' },
    { id: uuidv4(), name: 'Styled Slider' },
    
    // Audio Players
    { id: uuidv4(), name: 'Static Audio Player' },
    { id: uuidv4(), name: 'Custom Controls Audio Player' },
    { id: uuidv4(), name: 'Visualized Audio Player' },
    
    // Animated Counters
    { id: uuidv4(), name: 'Simple Counter' },
    { id: uuidv4(), name: 'Icon Counter' },
    { id: uuidv4(), name: 'Styled Counter' },
    
    // Interactive Maps
    { id: uuidv4(), name: 'Zoomable Map' },
    { id: uuidv4(), name: 'Custom Marker Map' },
    { id: uuidv4(), name: 'Detailed Map' },
    
    // Event Timelines
    { id: uuidv4(), name: 'Simple Timeline' },
    { id: uuidv4(), name: 'Interactive Timeline' },
    { id: uuidv4(), name: 'Detailed Timeline' },
    
    // Lightbox Galleries
    { id: uuidv4(), name: 'Simple Lightbox Gallery' },
    { id: uuidv4(), name: 'Captioned Lightbox Gallery' },
    { id: uuidv4(), name: 'Styled Lightbox Gallery' },
    
    // Code Snippets
    { id: uuidv4(), name: 'Simple Code Snippet' },
    { id: uuidv4(), name: 'Commented Code Snippet' },
    { id: uuidv4(), name: 'Styled Code Snippet' },
    
    // Service Boxes
    { id: uuidv4(), name: 'Icon Service Box' },
    { id: uuidv4(), name: 'Hover Effect Service Box' },
    { id: uuidv4(), name: 'Animated Service Box' },
    
    // Callout Boxes
    { id: uuidv4(), name: 'Simple Callout Box' },
    { id: uuidv4(), name: 'Styled Callout Box' },
    { id: uuidv4(), name: 'Interactive Callout Box' },
    
    // Modals
    { id: uuidv4(), name: 'Simple Modal' },
    { id: uuidv4(), name: 'Form Modal' },
    { id: uuidv4(), name: 'Image Modal' },
    
    // Banners
    { id: uuidv4(), name: 'Announcement Banner' },
    { id: uuidv4(), name: 'CTA Banner' },
    { id: uuidv4(), name: 'Image Banner' },
    
    // Footers
    { id: uuidv4(), name: 'Simple Footer' },
    { id: uuidv4(), name: 'Detailed Footer' },
    { id: uuidv4(), name: 'Styled Footer' },
    
    // Analytics Blocks
    { id: uuidv4(), name: 'Simple Analytics Block' },
    { id: uuidv4(), name: 'Graph Analytics Block' },
    { id: uuidv4(), name: 'Detailed Analytics Block' },
];

const TemplateSelector = ({ onSelect }) => {
    return (
        <div>
            <h2>Select a Template</h2>
            <ul>
                {templates.map((template) => (
                    <li key={template.id} onClick={() => onSelect(template)}>
                        {template.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TemplateSelector;
