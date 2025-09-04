import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name="Nintendo Switch" quantity={1} />
            <ItemCounter name="PlayStation 5" quantity={2} />
            <ItemCounter name="Xbox Series X" quantity={3} />
        </>
    )
}