import React from 'react';

const templates = [
    { id: 1, name: 'Landing Page' },
    { id: 2, name: 'Portfolio' },
    { id: 3, name: 'E-commerce' },
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
