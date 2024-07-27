// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update with your backend URL

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up", error);
    throw error;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    console.error("Error signing in", error);
    throw error;
  }
};
