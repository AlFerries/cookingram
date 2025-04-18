// Clean fields, leave only reliable for only recipe pages
export function parseMealDBRecipe (data) {

  const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strSource } = data[0];

  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    const ingredient = data[0][`strIngredient${i}`];
    const measure = data[0][`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({item: ingredient, measure});
    }
  }


  return {
    id: idMeal, 
    name: strMeal, 
    category: strCategory, 
    region: strArea, 
    instructions: strInstructions, 
    image: strMealThumb, 
    source: strSource,
    ingredients
  }
}

// Clean fields, leave only reliable for recipes list pages
export function parseMealsList (data) {

  const simplified = data.map(({idMeal, strMeal, strMealThumb}) => ({
    id: idMeal, 
    name: strMeal, 
    image: strMealThumb, 
  }));

  return simplified;
}

// Fetch to ther MealDB
export async function fetchMealBD (link, parser) {
  try {
    // await new Promise((r) => setTimeout(r, 4000));
    const res = await fetch(link);
    if (!res.ok) return { recipes: null, err: res.status};
    const data = await res?.json();
    if (!Array.isArray(data.meals)) return { recipes: null, err: "can't get recipe"};
    return {recipes: parser(data.meals), err: null};
  } catch(error) {
    return {recipes: null, err: error};
  }
}