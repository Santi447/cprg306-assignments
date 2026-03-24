"use client";
import Item from "./itemsComponent";
// import jsonItems from "./item.json";
import { useState } from "react";
import { getItems } from "@/app/week-10/_services/shopping-list-service";
import { useUserAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import {useFirestoreCollection} from "../../../hooks/useFirestoreCollection";

export default function ItemList({ onItemSelect }) {
  const { user } = useUserAuth();
  const [sortBy, setSortBy] = useState("name");
  // const [items, setItems] = useState([]);
  const {data: items, loading, error} = useFirestoreCollection("items", user.uid);
  // async function loadItems() {
  //   try {
  //     const itemsArray = await getItems(user.uid);
  //     setItems(itemsArray);
  //   } catch (error) {
  //     console.log("Error loading items:", error);
  //     return [];
  //   }
  // }
  const sortedItems = [...items].sort((currentItem, nextItem) => {
    if (sortBy === "name") {
      return currentItem.name.localeCompare(nextItem.name);
    } else if (sortBy === "category") {
      return currentItem.category.localeCompare(nextItem.category);
    }
  });
  // useEffect(() => {
  //   if (user) {
  //     loadItems();
  //   }
  // }, [user]);
  if (loading) {
    return <p>Loading items...</p>;
  }
  if (error) {
    return <p>Error loading items: {error.message}</p>;
  }

  return (
    <div>
      <div className="flex gap-3 p-4 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-3 p-4">
        {sortedItems.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} onSelect={() => onItemSelect(itemInArray)} />
        ))}
      </ul>
    </div>
  );
}
