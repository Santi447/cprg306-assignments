"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";  
import Item from "./items";

const CATEGORIES = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen foods",
  "Canned goods",
  "Dry goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other"
]

export default function NewItem({onAddItem}) {

    // const [name, setName] = useState("");
    // const [quantity, setQuantity] =useState(1);
    // const [category, setCategory] = useState("produce");
    // const [imageUrl, setImageUrl]= useState("");
    const [item, setItem] = useState({
      name: "",
      quantity: 1,
      category: "produce",
      imageUrl: "",
    });


    function handleSubmit(event){
        event.preventDefault();
        const id = Math.random().toString(36).substring(2, 9);
        const newItem = {...item, id};
        onAddItem(newItem);
        const initialState = {name: "",quantity: 1,category: "produce",imageUrl: "",}
        setItem(initialState);
        // console.log(item);
        // alert(`added:${name}\nquantity: ${quantity}\ncategory: ${category}`);
        // setName("");
        // setQuantity(1);
        // setCategory("produce");       
    }

    const handleChange = (e) => {
    const {name, value} = e.target;
    setItem((previous) => ({...previous,[name]:value}))
  };
    return(
      <Card className="w-full max-w-sm font-sans">
        <CardHeader>
          <CardTitle className="text-white">Enter new Item</CardTitle>
          <CardDescription>
            Enter Grocery Item to the list of available items
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form id="newItemForm" onSubmit={handleSubmit} className="items-center flex flex-col gap-5 ">
            <label htmlFor="name" className="mb-2.5 text-sm font-medium text-heading text-white"> Enter name
              <input
              name="name"
              type="text"
              id="name"
              value={item.name}
              onChange={handleChange}
              placeholder="Enter New Grocery Item"
              required={false}
              className="p-2 rounded-md bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-white"
              />
            </label>
            <div className="flex flex-row  gap-10"> 
            <label htmlFor="quantity" className="text-sm font-medium text-heading text-white"> Enter quantity
              <input
              name="quantity"
              type="number"
              value={item.quantity}
              min={1}
              max={99}
              onChange={handleChange}
              className="rounded-md bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-white"
              
              />
            </label>            
            <label htmlFor="category" className="text-sm font-medium text-heading text-white"> Enter category:
              <select
              value={item.category}
              id="category"
              name="category"
              onChange={handleChange}
              className=" rounded-md bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-white"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
                </div>
            <label htmlFor="imageUrl" className="text-sm font-medium text-heading text-white"> 
              Enter ImageUrl
              <input
              name="imageUrl"
              id="imageUrl"
              type="text"
              value={item.imageUrl}
              placeholder="URL from pexels.com only!"
              onChange={handleChange}
              className="rounded-md bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-white"
              />
            </label>
        </form>
        </CardContent>
        <CardFooter>
          <button form="newItemForm" type="submit" className=" bg-blue-600 p-5 w-full rounded-md text-white hover:bg-blue-400 active:bg-blue-800">Add Grocery Items</button>
        </CardFooter>
        </Card>
    );
}