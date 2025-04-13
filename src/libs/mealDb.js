export function parseMealDBRecipe (data) {

  const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strSource } = data[0];

  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
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

export function parseMealsList (data) {

  const simplified = data.map(({idMeal, strMeal, strMealThumb}) => ({
    id: idMeal, 
    name: strMeal, 
    image: strMealThumb, 
  }));

  return simplified;
}

export async function fetchMealBD (link, parser) {
  try {
    const res = await fetch(link);
    const data = await res?.json();
    return {recipes: parser(data.meals), err: null};
  } catch(error) {
    return {recipes: null, err: error};
  }
}