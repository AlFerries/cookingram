import RecipeCard from "@/components/recipe_card";
import { parseMealsList, fetchMealBD } from "@/libs/mealDb";
import NotFound from "@/app/not-found";

export default async function Home({ params }) {

  const { type } = await params

  const { recipes, err } = await fetchMealBD(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPES}${type}`, parseMealsList)
  if (err) return <NotFound />;

  return(
    <>
    <div className="flex flex-wrap justify-between px-16 py-8 gap-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </>
  )
}