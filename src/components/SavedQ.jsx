
import React from 'react';


const SavedQ = ({ quotes }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="card">
          <p className="quote-text">{quote}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedQ;