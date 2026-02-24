"use client";
import { useState } from "react";  

export default function NewItem({onAddItem}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] =useState(1);
    const [category, setCategory] = useState("produce");
    const [imageUrl, setImageUrl] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const id = Math.random().toString(36).substring(2, 9);
        const item = {id, name, quantity, category, imageUrl};
        console.log(item);
        // alert(`added:${name}\nquantity: ${quantity}\ncategory: ${category}`);
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
        setImageUrl("");
    }

    return(
        <form onSubmit={handleSubmit} className="items-center flex flex-col gap-5 ">
            <label className="block mb-2.5 text-sm font-medium text-heading mt-30"> Enter name
              <input
              id="name"
              type="text"
              value={name}
              onChange={(element)=> {setName(element.target.value)}}
              required={false}
              className="p-2 rounded-md bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              />
            </label>
            <div className="flex flex-row  gap-10"> 
            <label> Enter quantity
              <input
              id="quantity"
              type="number"
              value={quantity}
              min={1}
              max={99}
              onChange={(element)=> {setQuantity(Number(element.target.value))}}
              className="bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              
              />
            </label>            
            <label> Enter category:
              <select
              value={category}
              onChange={(element) => setCategory(element.target.value)}
              className="bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </label>
                </div>
            <label> Enter ImageUrl
              <input
              id="imageUrl"
              type="text"
              value={imageUrl}
              placeholder="URL from pexels.com only!"
              onChange={(element)=> {setImageUrl(element.target.value)}}
              className="bg-neutral-900 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              />
            </label>
            <button type="submit" className=" bg-blue-600 p-5 w-15 rounded-md text-white hover:bg-blue-400 active:bg-blue-800">+</button>
        </form>
    );
}