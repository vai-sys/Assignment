
import React from 'react';
const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="card">
      <p className="quote-text">{quote}</p>
      <button className="save-button" onClick={() => onSave(quote)}>Save to List</button>
    </div>
  );
};

export default QuoteCard;
