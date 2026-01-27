export default function Item({name, quantity, category }){
    return (
        <ul class="space-y-2">
        <li class="border p-2 rounded">
            <p>Name: {name}</p>
            <p>Quantity: {quantity} </p>
            <p>Category: {category}</p>
        </li>
        </ul>
    );
}