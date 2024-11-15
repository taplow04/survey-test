import React from 'react';

function NavigationButtons({ currentQuestion, totalQuestions, onNext, onPrevious, onSkip, onSubmit }) {
  return (
    <div className="navigation-buttons">
      <button className="prev" onClick={onPrevious} disabled={currentQuestion === 0}>Previous</button>
      <button className="skip" onClick={onSkip}>Skip</button>
      <button className="next" onClick={onNext} disabled={currentQuestion === totalQuestions - 1}>Next</button>
      {currentQuestion === totalQuestions - 1 && (
        <button className="sur" onClick={onSubmit}>Submit Survey</button>
      )}
    </div>
  );
}

export default NavigationButtons;
