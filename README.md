# 🍲 Food Blog - A React and Vite-Based Recipe Website

Welcome to Food Blog, a React-based website designed to be the ultimate recipe destination for food enthusiasts! This project is built with Vite and JavaScript, leveraging a rich food database API to bring you a wide variety of recipes, complete with stunning visuals, detailed ingredients, and step-by-step instructions. With a simple and user-friendly interface, Food Blog makes it easy to explore, discover, and cook a world of flavors.

# 🌐 Website Overview
Food Blog provides two main pages:

- **Home Page**: Displays all available recipes in a card format. Each recipe card includes an image, recipe name, and category. Clicking on a recipe image takes users to a detailed recipe page, where they can find the ingredients and cooking instructions.

- **About Page**: Offers an overview of what Food Blog is about, with information about the website's purpose, browsing experience, and search functionality. It also includes imaginary contact information for added realism.

# 🧑‍🍳 Key Features
- **Recipe Search**: Users can search for recipes by name using a powerful search bar, making it easy to find the exact recipe they need.
- **Recipe Cards**: Each recipe is shown as a card with an image, name, and category. Clicking on the image leads to a dedicated recipe page with complete details.
- **Recipe Pages**: Each recipe page follows a consistent format, providing:
   - A high-quality image of the dish
   - A list of ingredients
   - Step-by-step cooking instructions
- **User-Friendly Navigation**: Simple and intuitive design for a seamless browsing experience.
- **Responsive Design**: Optimized for both desktop and mobile viewing, ensuring a great experience on any device.

# 🛠️ Built With
- **React**: For creating a dynamic, component-based user interface.
- **Vite**: For fast and efficient bundling and development experience.
- **JavaScript (ES6+)**: To handle interactive features and API calls.
- **Food API**: Integrates with a rich food database API to bring recipes directly to users.
- **SS/SCSS**: For styling to create an aesthetically pleasing and responsive design.

# 🚀 Getting Started
Follow these steps to set up the project locally:

## Prerequisites
- Node.js and npm installed on your system
- API key for the food database (if the project requires one)
  
## Installation

1. Clone the Repository:

``bash
git clone https://github.com/yourusername/food-blog.git
cd food-blog
``

2. Install Dependencies:
`bash
npm install
`

3. Set Up Environment Variables (if applicable):
- Create a .env file in the root directory.
- Add your API key:
  
`bash
VITE_API_KEY=your_api_key_here
`

4. Run the Development Server:

`bash
npm run dev
`

This command will start the Vite development server. Open http://localhost:3000 in your browser to see the app in action.

# 📂 Available Commands
- npm run dev - Starts the development server
- npm run build - Builds the app for production
- npm run preview - Previews the production build locally

## Project Structure

- **public**: Static assets

- **src**: Main source code directory
  - **components**: Reusable components (e.g., Navbar, RecipeCard, SearchBar)
  - **pages**: Page components (e.g., Home, About, RecipeDetails)
  - **services**: API calls and data handling
  - **styles**: CSS/SCSS files for styling
  - **App.jsx**: Main application component
  - **main.jsx**: Application entry point

- **.env**: Environment variables (API key, if needed)
- **.eslintrc.cjs**: ESLint configuration file
- **.gitignore**: Specifies files ignored by Git
- **index.html**: Root HTML file for the application
- **package-lock.json**: Lock file for npm dependencies
- **package.json**: Project metadata and npm scripts
- **README.md**: Documentation for the project
- **vite.config.js**: Configuration file for Vite
