"use client";
import ItemList from "./item-list";
import NewItem from "./newItem";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page(){
  const [items, setItems] = useState(itemsData);
  function handleAddItem(newItem){
    setItems([...items, newItem]);
  }
  return(
    <main className='bg-slate-950 min-h-screen text-white'>
    <h1 className='text-4xl text-center text-white py-10'>Shopping List</h1>
      <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
    </main>
  );
}