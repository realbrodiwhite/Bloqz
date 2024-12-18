import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragAndDropBuilder = () => {
    const [components, setComponents] = useState([]);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(components);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setComponents(items);
    };

    const addComponent = (component) => {
        setComponents([...components, component]);
    };

    return (
        <div>
            <h2>Drag-and-Drop Builder</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {components.map((component, index) => (
                                <Draggable key={component.id} draggableId={component.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {component.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={() => addComponent({ id: `component-${components.length}`, content: 'New Component' })}>
                Add Component
            </button>
        </div>
    );
};

export default DragAndDropBuilder;
