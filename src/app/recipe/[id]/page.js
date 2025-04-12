import { parseMealDBRecipe } from "@/libs/mealDb";

export default async function Home({params}) {

  const { id } = await params;

  const res = await fetch(`${process.env.MEAL_GET_RECIPE_ID}${id}`);
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