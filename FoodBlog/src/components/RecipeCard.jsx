import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipes }) => {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipes;
    return (
      <div className="card">
        <Link to={`/recipe/${idMeal}`}>
          <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
          />
        </Link>
        <div className="card-body">
          <span className="category">{strCategory}</span>
          <h2>{strMeal}</h2>
        </div>
      </div>
    );
  };
  

RecipeCard.propTypes = {
    recipes: PropTypes.shape({
        idMeal: PropTypes.string.isRequired,
        strMeal: PropTypes.string.isRequired,
        strCategory: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired
    }).isRequired
};

export default RecipeCard;