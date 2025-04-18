import RecipeCard from "@/components/recipe_card";
import { parseMealsList, fetchMealBD } from "@/libs/mealDb";
import Link from "next/link";

// TODO: change URL to All recipes in .env
// TODO: handle errors, check response is ok (??)
// TODO: make a preloading grid to show
// TODO: set timeout for fetching to show an error to user if tech is failed
// TODO: beautify to make a list of recipe cards

export default async function Home() {

  const { recipes, err } = await fetchMealBD(process.env.NEXT_PUBLIC_MDB_GET_RECIPES, parseMealsList)
  if (err) return;

  return(
    <>
    <div className="flex flex-wrap justify-between px-16 py-8 gap-8">
      {recipes.map(recipe => (
        // <div key={recipe.id}>
        //   <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        // </div>
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </>
  )
}