import GroceryItemList from "./GroceryItemList";


export default function Page(){
    return(
        <main className="p-4 max-w-xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-3">Grocery Item</h1>
            <GroceryItemList />
        </main>
    );
}