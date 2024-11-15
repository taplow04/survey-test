import React from 'react';
import './Question.css'; // Optional: separate CSS for styling dots

function Question({ question, response, onAnswer }) {
  const renderDots = (max) => (
    <div className="dot-group">
      {[...Array(max)].map((_, index) => (
        <label key={index} className="dot-label">
          <input
            type="radio"
            name={question.id}
            value={index + 1}
            checked={response === String(index + 1)}
            onChange={(e) => onAnswer(question.id, e.target.value)}
          />
          <span className="dot">{index + 1}</span> {/* Displaying the number inside each dot */}
        </label>
      ))}
    </div>
  );

  return (
    <div className="question">
      <label>{question.text}</label>
      {question.scale ? (
        renderDots(question.scale)
      ) : (
        <textarea
          value={response || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
        ></textarea>
      )}
    </div>
  );
}

export default Question;
