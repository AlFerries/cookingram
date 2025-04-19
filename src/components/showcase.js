import { fetchMealBD, parseMealsList } from "@/libs/mealDb";
import RecipeCard from "./recipe_card";
import Link from "next/link";

export default async function Showcase({type}) {

  const { recipes, err } = await fetchMealBD(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPES}${type}`, parseMealsList)
    if (err) return <NotFound />;

  return (
    <div>
      <div className="px-16 mt-8 mb-4 flex">
        <h2 className="font-extrabold text-xl mr-auto">{type}s</h2>
        <Link href={`/recipes/${type}`} className="ml-auto">{"see all ->"}</Link>
      </div>
      <div className="flex flex-col md:flex-row md:flex-none justify-between md:px-16 gap-8 mx-auto">
        {recipes.slice(0,3).map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )

}