import './RecipeDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async() => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setRecipe(data.meals[0]);
    }

    fetchRecipe();
  }, [id]);

  const formatInstructions = (instructions) => {
    const stepPattern = /STEP \d{1,2} [A-Z\s]*:?/g;
    let steps = instructions.split(stepPattern);

    // Clean up the result after split by removing any empty strings
    steps = steps.filter(step => step.trim().length > 0);

    if (steps.length <= 1) {
      // No STEP pattern detected
      return (
        <ol>
          {instructions.split('. ').map((sentence, index) => (
            sentence.trim().length > 0 ? <li key={index}>{sentence.trim()}.</li> : null
          ))}
        </ol>
      );
    }
    else {
        return (
            <ol>
              {steps.map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ol>
        );
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        className="recipe-img" 
      />

      <div className="Ingredient-list">
      <h3>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }).map((_, index) => {
            const ingredient = recipe[`strIngredient${index + 1}`];
            const measure = recipe[`strMeasure${index + 1}`];
            return ingredient ? (
              <li key={index}>
                {ingredient} - {measure}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      <div className="Instructions">
      <h3>Instructions:</h3>
        <p>{formatInstructions(recipe.strInstructions)}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
