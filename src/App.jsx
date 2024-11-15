import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Question from './components/Question/Question.jsx';
import NavigationButtons from './components/NavigationButtons';
import ThankYouScreen from './components/ThankYouScreen';
import { getSessionId, saveResponses, getSavedResponses, markSurveyCompleted } from './utils';
import questionsData from './questions'; // Import questions data

function App() {
  const [sessionId, setSessionId] = useState(getSessionId());
  const [responses, setResponses] = useState(getSavedResponses(sessionId));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStart = () => setIsWelcomeScreen(false);

  const handleAnswer = (questionId, answer) => {
    const updatedResponses = { ...responses, [questionId]: answer };
    setResponses(updatedResponses);
    saveResponses(sessionId, updatedResponses);
  };

  const handleNext = () => setCurrentQuestion((prev) => Math.min(prev + 1, questionsData.length - 1));
  const handlePrevious = () => setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  const handleSkip = () => handleNext();

  const handleConfirmSubmit = () => {
    markSurveyCompleted(sessionId);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsWelcomeScreen(true);
      setIsSubmitted(false);
      setResponses({});
      setSessionId(uuidv4());
    }, 5000);
  };

  return (
    <div className="App">
      {isWelcomeScreen ? (
        <WelcomeScreen onStart={handleStart} />
      ) : isSubmitted ? (
        <ThankYouScreen />
      ) : (
        <div className="survey-form">
          <h2>Customer Survey</h2> 
          <h3>{currentQuestion + 1}/{questionsData.length}</h3>
          <Question
            question={questionsData[currentQuestion]}
            response={responses[questionsData[currentQuestion].id]}
            onAnswer={handleAnswer}
          />
          <NavigationButtons
            currentQuestion={currentQuestion}
            totalQuestions={questionsData.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSkip={handleSkip}
            onSubmit={handleConfirmSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
