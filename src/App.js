import React, { useState, useEffect,useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DailyQuote from './components/DailyQuote';
import Favorites from './components/Favourites';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [notification, setNotification] = useState('');

  const initialFetchDoneRef = useRef(false);

  useEffect(() => {
    if (!initialFetchDoneRef.current) {
      fetchDailyQuote();
      initialFetchDoneRef.current = true;
    }
},[]);

  const fetchDailyQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchDailyQuote();
  };

  const handleShare = () => {
    alert(`Check out this motivational quote: "${quote}" - ${author}`);
  };

  const handleSave = () => {
    const newFavorite = { quote, author };
    setFavoriteQuotes([...favoriteQuotes, newFavorite]);
    setNotification('Quote saved to favorites!');
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear notification after 3 seconds
  };

  const handleRemove = (fav) => {
    const updatedFavorites = favoriteQuotes.filter((item) => item.quote !== fav.quote);
    setFavoriteQuotes(updatedFavorites);
    setNotification('Quote removed from favorites!');
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear notification after 3 seconds
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DailyQuote quote={quote} author={author} onNewQuote={handleNewQuote} onShare={handleShare} onSave={handleSave} />} />
          <Route path="/favorites" element={<Favorites favoriteQuotes={favoriteQuotes} onRemove={handleRemove} />} />
        </Routes>
        <nav className='nav'>
          <ul className="nav-links">
            <li>
              <Link to="/">Daily Quote</Link>
            </li>
            <li className='fav'>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </Router>
  );
}

export default App;
