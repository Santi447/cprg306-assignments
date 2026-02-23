"use client";
import Item from "./items";
// import jsonItems from "./item.json";
import {UseState} from "react";



export default function ItemList({items}){
  
  return(
      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-3 p-4">
        {items.map(item =>(
          <Item key={item.id} {...item}/>
        ))}
      </ul>

  );
  
}