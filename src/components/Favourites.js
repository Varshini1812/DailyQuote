import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Favourite.css'; 

function Favorites({ favoriteQuotes, onRemove }) {
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
      <h1>Favourites</h1>
      {favoriteQuotes.length === 0 ? (
        <p className="nofav">No favorite quotes added yet.</p>
      ) : (
        <ul>
          {favoriteQuotes.map((fav) => (
            <li key={fav.quote}>
              <div className="quote">{fav.quote}</div>
              <div className="author">- {fav.author}</div>
              <button onClick={() => onRemove(fav)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
