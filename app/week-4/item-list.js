
import Item from "./item.js";
import jsonItems from "./items.json";

export default function ItemList(){

  return(
      <div>
        {jsonItems.map(items =>(
          <Item key={items.id} name={items.name} quantity={items.quantity} category={items.category}/>
        ))}
      </div>

  );
  
}