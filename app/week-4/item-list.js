
import Item from "./items";
import jsonItems from "./item.json";

export default function ItemList(){

  return(
      <div>
        {jsonItems.map(items =>(
          <Item key={items.id} name={items.name} quantity={items.quantity} category={items.category}/>
        ))}
      </div>

  );
  
}