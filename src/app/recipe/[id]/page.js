import { parseMealDBRecipe, fetchMealBD } from "@/libs/mealDb";

// TODO: sanitize ID
// TODO: notFound page if ID is incorrect or undefined
// TODO: bautify page, convert into recipe page

export default async function Home({ params }) {

  const { id } = await params;

  const { recipes : recipe, err } = await fetchMealBD(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPE_ID}${id}`, parseMealDBRecipe);
  if (err) return;

  return(
    <>
      <div key={recipe.id}>
        <h1>{recipe.name}</h1>
      </div>
    </>
  )
}