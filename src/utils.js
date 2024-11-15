import { v4 as uuidv4 } from 'uuid';

export function getSessionId() {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
}

export function saveResponses(sessionId, responses) {
  localStorage.setItem(`responses-${sessionId}`, JSON.stringify(responses));
}

export function getSavedResponses(sessionId) {
  return JSON.parse(localStorage.getItem(`responses-${sessionId}`)) || {};
}

export function markSurveyCompleted(sessionId) {
  localStorage.setItem(`surveyStatus-${sessionId}`, 'COMPLETED');
}
