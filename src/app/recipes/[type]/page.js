import RecipeCard from "@/components/recipe_card";
import { parseMealsList, fetchMealBD } from "@/libs/mealDb";
import NotFound from "@/app/not-found";

// TODO: add lazy loading and load-on-scroll

export default async function Home({ params }) {

  const { type } = await params

  const { recipes, err } = await fetchMealBD(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPES}${type}`, parseMealsList)
  if (err) return <NotFound />;

  return(
    <>
    <div className="flex flex-col md:flex-row md:flex-wrap justify-around md:px-16 py-8 gap-8 mx-auto">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </>
  )
}