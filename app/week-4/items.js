

export default function Item({name,quantity,category}){
  return(
  <li className="flex flex-col gap-1 rounded-lg border border-purple-600 bg-black p-4 shadow-sm">
      <p className="text-lg font-semibold">Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
  </li>
  );
  
}