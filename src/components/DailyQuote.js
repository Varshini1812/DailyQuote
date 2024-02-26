import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/DailyQuote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function DailyQuote({ quote, author, onNewQuote, onSave }) {
  // Add prop-type validation
  DailyQuote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    onNewQuote: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  const handleSave = () => {
    onSave();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Motivational Quote', // Title of the shared message
          text: `"${quote}" - ${author}`, // Quote and author to be shared
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      const shareText = `Check out this motivational quote: "${quote}" - ${author}`;
      const shareUrl = 'https://your-website.com'; 
      const shareMessage = `${shareText} ${shareUrl}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`);
    }
  };

  return (
    <div className="daily-quote-container">
      <h1 className="title">Quote of the day</h1>
      <div className="quote-container">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
        <div className="quotebuttons">
        <button className="save-btn" onClick={handleSave}><FontAwesomeIcon icon={faHeart} /></button>
        <button className="save-btn" onClick={handleSave}><FontAwesomeIcon icon={faVolumeHigh} /></button>
        <button className="new-quote-btn" onClick={onNewQuote}>Get quote</button>
        </div>
      </div>
      <div className="button-container">
      
        
        <button className="share-btn" onClick={handleShare}>Share</button>
      </div>
    </div>
  );
}

export default DailyQuote;
