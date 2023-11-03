import { useState, useEffect } from 'react';

import "./App.css";
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Abouts from './components/Abouts';
import RecipeDetails from './components/RecipeDetails'; 

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <h2>Discover Delicious Recipes!!</h2>
              <SearchBar
              value = {query}
              handleSubmit = {handleSubmit}
              onChange = {event => setQuery(event.target.value)}
              isLoading = {isLoading}
              />
              <div className="recipes">
                {recipes ? recipes.map((recipes) => (
                  <RecipeCard
                    key={recipes.idMeal}
                    recipes={recipes}
                  />
                )): "No Recipes!"}
              </div>
            </>
          } />
          <Route path="/Abouts" element={<Abouts />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
