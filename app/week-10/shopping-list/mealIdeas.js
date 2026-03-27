"use client";
import {useState, useEffect} from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
 async function fetchMealIdeas(ingredient) {
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok){
      throw new Error(`Http Error ${response.status}`);
    }
    const data = await response.json();
      return data.meals || [];
  }
  catch(error){
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ingredient}) {
  const [mealIdeas, setMealIdeas] = useState([]);

  const  loadMealIdeas = async () => {
    const result  = await fetchMealIdeas(ingredient);
    setMealIdeas(result);
  };
  useEffect(() => {
    if(ingredient){
    loadMealIdeas();
    }
  }, [ingredient]);

  return(
    <div>
      <h2>Meal Ideas</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mealIdeas.map(meal =>(
          <li key={meal.idMeal} className="text-white m-4">
          <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img src={meal.strMealThumb}  alt={meal.strMeal} className="relative z-20 aspect-video w-full object-cover"/>
            <CardHeader>
              <CardTitle className="text-white">{meal.strMeal}</CardTitle>
            </CardHeader>
            <CardFooter>
              <button className="w-full bg-blue-600 text-white hover:bg-blue-700">View Recipe</button>
      </CardFooter>
          </Card>

          </li>
        ))}
      </ul>
    </div>
  )
}