import React, { useState } from 'react';

const FormBuilder = () => {
    const [formFields, setFormFields] = useState([]);

    const addField = (fieldType) => {
        setFormFields([...formFields, { id: Date.now(), type: fieldType }]);
    };

    return (
        <div>
            <h2>Form Builder</h2>
            <button onClick={() => addField('text')}>Add Text Field</button>
            <button onClick={() => addField('email')}>Add Email Field</button>
            <button onClick={() => addField('textarea')}>Add Textarea</button>
            <form>
                {formFields.map((field) => (
                    <div key={field.id}>
                        {field.type === 'text' && <input type="text" placeholder="Text Field" />}
                        {field.type === 'email' && <input type="email" placeholder="Email Field" />}
                        {field.type === 'textarea' && <textarea placeholder="Textarea" />}
                    </div>
                ))}
            </form>
        </div>
    );
};

export default FormBuilder;
