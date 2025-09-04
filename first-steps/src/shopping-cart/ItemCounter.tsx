interface ItemCounterProps{
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity}: ItemCounterProps) => {
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

            <button> -1 </button>
            <span> {quantity} </span>
            <button> +1 </button>
        </section>
    );
};
