import { parseMealDBRecipe } from "@/libs/mealDb";

export default async function Home({params}) {

  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPE_ID}${id}`); // TODO: check id, show notFound page if not exists
  const data = await res.json();
  const recipe = parseMealDBRecipe(data.meals[0]);

  return(
    <>
      <div key={recipe.id}>
        <h1>{recipe.name}</h1>
      </div>
    </>
  )
}