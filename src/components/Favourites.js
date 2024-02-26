import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/Favourite.css'; 

function Favorites({ favoriteQuotes, onRemove }) {
  // Add prop-type validation
  Favorites.propTypes = {
    favoriteQuotes: PropTypes.arrayOf(
      PropTypes.shape({
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      })
    ).isRequired,
    onRemove: PropTypes.func.isRequired
  };

  return (
    <div className="Favorites"> 
      <h1>Favorites</h1>
      <ul>
        {favoriteQuotes.map((fav) => (
          <li key={fav.quote}>
            <div className="quote">{fav.quote}</div>
            <div className="author">- {fav.author}</div>
            <button onClick={() => onRemove(fav)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
