export default function Item({name, quantity, category }){
    return (
        <ul>
        <li>
            Name: {name} | Quantity: {quantity} | Category: {category}
        </li>
        </ul>
    );
}