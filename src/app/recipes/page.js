import { parseMealDBRecipe } from "@/libs/mealDb";
import Link from "next/link";

export default async function Home() {

  const res = await fetch(process.env.MEAL_GET_RECIPES);
  const data = await res.json();
  const recipes = data.meals.map(recipe => parseMealDBRecipe(recipe));

  return(
    <>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </div>
      ))}
    </>
  )
}