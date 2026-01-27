import GroceryItemList from "./GroceryItemList";


export default function Page(){
    return(
        <main class="p-4 max-w-xl mx-auto">
            <h1 class="text-3xl font-bold mb-3">Grocery Item</h1>
            <GroceryItemList />
        </main>
    );
}