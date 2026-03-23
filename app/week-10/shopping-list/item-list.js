"use client";
import Item from "./items";
// import jsonItems from "./item.json";
import {useState} from "react";


export default function ItemList({items, onItemSelect}){
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((currentItem, nextItem) => {
    if (sortBy === "name") {
      return currentItem.name.localeCompare(nextItem.name);
    } 
    else if (sortBy === "category") {
      return currentItem.category.localeCompare(nextItem.category);
    }
  });

  return(
    <div>
      <div className="flex gap-3 p-4 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-gray-400"}`}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-gray-400" }`}>
          Sort by Category
        </button>
      </div>
      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-3 p-4">
        {sortedItems.map(item =>(
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)}/>
        ))}
      </ul>
    </div>
  );
  
}