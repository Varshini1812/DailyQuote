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
const handleSound=()=>{
  let utterance=new SpeechSynthesisUtterance(`${quote}`);
  speechSynthesis.speak(utterance);

}


const handleShareWp = () => {
  const shareText = `Check out this motivational quote: "${quote}" - ${author}`;
  const shareUrl = window.location.href;
  const shareMessage = `${shareText} ${shareUrl}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`);
};

const handleShareTwit = () => {
  let tweetUrl=`https://twitter.com/intent/tweet?url=${quote}`;
  window.open(tweetUrl,"_blank");
};

  return (
    <div className="daily-quote-container">
      <h1 className="title">Quote of the day</h1>
      <div className="quote-container">
        <div className="quotearea">
        <p className="quote">"{quote}"</p>
        </div>
        <div className="authorarea">
        <p className="author">- {author}</p>
        </div>
      </div>
      <div className="button-container">
       <div className="features">
        <ul>
        <button className="save-btn" onClick={handleSave}><FontAwesomeIcon icon={faHeart} /></button>
        <button className="sound-btn" onClick={handleSound}><FontAwesomeIcon icon={faVolumeHigh} /></button>
        <button className="shareWp-btn" onClick={handleShareWp}><i className="fab fa-whatsapp"></i></button>
        <button className="sharetwit-btn" onClick={handleShareTwit}><i className="fab fa-twitter"></i></button>

        </ul>
        <button className="new-quote-btn" onClick={onNewQuote}>Get quote</button>
       </div>
        
        
        
      </div>
      
      </div>
    
  );
}

export default DailyQuote;
