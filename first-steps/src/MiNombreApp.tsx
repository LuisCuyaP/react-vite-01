import type { CSSProperties } from "react";

const firstName = 'Luis'
const lastName = 'Cuya'
const favoriteGames = ['Zelda', 'Mario Bros', 'Metroid'];
const isActive = true;
const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
};
const myStyles: CSSProperties = {
    whiteSpace: 'pre-wrap',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: isActive ? '10px' : '0px'
}

export const MiNombreApp = () => {
    return (
        <>
            <h1>Mi Nombre es {firstName}</h1>
            <h3>Mi Apellido es {lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>
           
            <p 
             style={myStyles}
            >
                <h1>{JSON.stringify(address)}</h1>
            </p>
        </>
    );
};