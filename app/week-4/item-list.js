
import Item from "./items";
import jsonItems from "./item.json";



export default function ItemList(){

  return(
      <ol className="mx-auto flex w-full max-w-2xl flex-col gap-3 p-4">
        {jsonItems.map(items =>(
          <Item key={items.id} {...items}/>
        ))}
      </ol>

  );
  
}