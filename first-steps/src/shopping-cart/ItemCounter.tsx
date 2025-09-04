import { useState } from "react";

interface ItemCounterProps{
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: ItemCounterProps) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        if(count === 1) return;
        setCount(count - 1);
    }

    const handleClick = () => {
        console.log(`Click ${name}`);
    }

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '10'
        }}>
            <span style={{ width: '150px' }}>
                {name}
            </span>

            <button
                onMouseEnter={() => {
                    console.log(`Mouse enter ${name}`);
                }}
                onClick={handleAdd}> 
                +1 
            </button>
            <span> {count} </span>
            <button onClick={handleRemove}> -1 </button>
        </section>
    );
};
