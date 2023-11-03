import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return (
        <form onSubmit = {handleSubmit}>
            <input 
               value = {value}
               disabled = {isLoading}
               onChange = {onChange}
               placeholder = "Search Recipes!"
               className = "form-control"
               name="searchQuery"
            />
            <input
               disabled = {isLoading || !value}
               type = "submit"
               className = "btn"
               value = "Search"
               name="submit"
            />
        </form>
    )
};

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;