import { parseMealsList } from "@/libs/mealDb";
import Link from "next/link";

// TODO: change URL to All recipes in .env
// TODO: handle errors, check response is ok (??)
// TODO: make a preloading grid to show
// TODO: set timeout for fetching to show an error to user if tech is failed
// TODO: parseMealDBRecipe returns to much info, make another func to return fields we have to show here
// TODO: beautify the page with HTML & CSS

export default async function Home() {

  const fetchAllRecipes = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_MDB_GET_RECIPES);
      const data = await res?.json();
      return {recipes: parseMealsList(data.meals), err: null};
    } catch(error) {
      return {recipes: null, err: error};
    }
  }

  const {recipes, err} = await fetchAllRecipes();
  if (err) return;

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