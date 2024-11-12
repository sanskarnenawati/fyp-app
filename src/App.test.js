import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders Stock Predictor title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Stock Predictor/i);
  expect(titleElement).toBeInTheDocument();
});
