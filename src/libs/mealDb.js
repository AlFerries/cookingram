export function parseMealDBRecipe (data) {

  const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strSource } = data;

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