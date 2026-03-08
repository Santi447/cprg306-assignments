"use client";
import {useState} from "react";
import {useEffect} from "react";

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
    loadMealIdeas();
  }, [ingredient]);
  return(
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {mealIdeas.map(meal =>(
          <li key={meal.idMeal} className="text-white">
            {meal.strMeal}
          <img src={meal.strMealThumb} height={150} width={150} alt={meal.strMeal}/>
          </li>
        ))}
      </ul>
    </div>
  )

}