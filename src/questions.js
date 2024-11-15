// src/questions.js
import { v4 as uuidv4 } from 'uuid';

const questionsData = [
  { id: uuidv4(), text: "How satisfied are you with our products?", scale: 5 },
  { id: uuidv4(), text: "How fair are the prices compared to similar retailers?", scale: 5 },
  { id: uuidv4(), text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
  { id: uuidv4(), text: "On a scale of 1-10, how would you recommend us to your friends and family?", scale: 10 },
  { id: uuidv4(), text: "What could we do to improve our service?", scale: null },
];

export default questionsData;
