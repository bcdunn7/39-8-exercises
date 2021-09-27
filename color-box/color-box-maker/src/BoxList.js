import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const remove = (id) => {
        setBoxes(boxes.filter(b => b.id !== id))
    };
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    return (
        <>
            <NewBoxForm addBox={addBox}/>
            {boxes.map(b => (
                <Box 
                    key={b.id}
                    id={b.id}
                    color={b.color} 
                    height={b.height} 
                    width={b.width} 
                    remove={remove}
                />
            ))}
        </>
    );
}
  
export default BoxList;
