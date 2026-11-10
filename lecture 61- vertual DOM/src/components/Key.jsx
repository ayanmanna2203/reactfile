import React, { useState } from 'react'
function Product({ name }) {
    const [quantity, setQuantity] = useState(0)

    return (
        <div>
            <h3>{name}</h3>
            <h2>{quantity}</h2>
            <button onClick={() => setQuantity((prev) => prev + 1)}>Quantity</button>
        </div>
    )
}
function Key() {
    const [products, setProducts] = useState([
        {
            name: "mouse",
            id: 1,
        },
        {
            name: "keyboad",
            id: 2
        },
        {
            name: "speaker",
            id: 3
        },
        {
            name: "laptop",
            id: 4
        },
        {
            name: "charger",
            id: 5
        },
    ]);
    function removeFirstProduct() {
        setProducts((prev) => prev.slice(1))
    }
    return (
        <>
            <ul>
                {products.map(({name , id}, i) => (
                    <Product name={name} key={id} />
                ))}
            </ul>
            <button onClick={removeFirstProduct}>Remove First Product</button>
        </>
    )
}

export default Key