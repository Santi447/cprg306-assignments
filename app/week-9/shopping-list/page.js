"use client";
import ItemList from "./item-list";
import NewItem from "./newItem";
import MealIdeas from "./mealIdeas";
import itemsData from "./item.json";
import Link from "next/link";
``;
import LogoutButton from "@/app/components/LogoutButton";
import { useState } from "react";
import { useUserAuth } from "../../context/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  const handleItemSelected = (item) => {
    function removeEmojis(string) {
      var regex =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      return string.replace(regex, "");
    }
    let transformName = removeEmojis(item.name).split(",");
    console.log(transformName[0].trim());
    setSelectedItemName(transformName[0].trim());
  };
  if (!user) {
    return (
      <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center">
        <p>logging Out...</p>
        <Link
          href="/week-9/login"
          className="text-blue-600 hover:text-blue-300"
        >
          Back to Login
        </Link>
      </div>
    );
  }
  return (
    <main className="bg-slate-950 min-h-screen">
      <h1 className="text-4xl text-center text-white py-10">Shopping List</h1>
      <h3 className="text-xl text-center text-white py-5">
        Welcome, {user.email}!
      </h3>
      <div className="flex justify-center items-center p-4">
        <LogoutButton url="/week-9/login" />
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelected} />
        </div>
        {selectedItemName && (
          <div>
            <h2 className="text-2xl text-center text-white py-10">
              Meal Ideas
            </h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        )}
      </div>
    </main>
  );
}
