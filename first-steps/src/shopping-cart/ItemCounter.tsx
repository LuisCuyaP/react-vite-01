import { useState } from "react";

//import './ItemCounter.css';
import styles from './ItemCounter.module.css';

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
        <section
            className={styles.itemRow}
            //className="item-row" -> usando ItemCounter.css

/*         style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '10'
        }} */
        >
            <span 
            //className="item-text"
            className={styles['item-text']}
            style={{ 
                color: count === 1 ? 'red' : 'blue',
            }}>
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
