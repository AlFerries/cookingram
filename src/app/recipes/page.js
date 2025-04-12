import { parseMealDBRecipe } from "@/libs/mealDb";
import Link from "next/link";

export default async function Home() {

  const res = await fetch(process.env.NEXT_PUBLIC_MDB_GET_RECIPES); // TODO: change URL to All recipes
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