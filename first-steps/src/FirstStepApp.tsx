import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {
        productName: 'Nintendo Switch',
        quantity: 1
    },
    {
        productName: 'PlayStation 5',
        quantity: 2
    },
    {
        productName: 'Xbox Series X',
        quantity: 3
    }
];

export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {itemsInCart.map( (item) => (
                <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
            ))}

           {/*  <ItemCounter name="Nintendo Switch" quantity={1} />
            <ItemCounter name="PlayStation 5" quantity={2} />
            <ItemCounter name="Xbox Series X" quantity={3} /> */}
        </>
    )
}