export default function Item({name, quantity, category }){
    return (
        <ul className="space-y-2">
        <li className="border p-2 rounded">
            <p>Name: {name}</p>
            <p>Quantity: {quantity} </p>
            <p>Category: {category}</p>
        </li>
        </ul>
    );
}