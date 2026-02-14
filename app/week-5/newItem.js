"use client";
import { useState } from "react";  

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] =useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event){
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert(`added:${name}\nquantity: ${quantity}\ncategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> Enter name
              <input
              type="text"
              value={name}
              onChange={(element)=> {setName(element.target.value)}}
              required={false}
              />
            </label>
            <label> Enter quantity
              <input
              type="number"
              value={quantity}
              min={1}
              max={99}
              onChange={(element)=> {setQuantity(Number(element.target.value))}}


              />
            </label>            
            <label> Enter category
              <select
              value={category}
              onChange={(element) => setCategory(element.target.value)}
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
            <button type="submit">+</button>
        </form>
    );
}