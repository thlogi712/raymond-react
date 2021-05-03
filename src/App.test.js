import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fabric objects', () => {
  render(<App />);
  const linkElement = screen.getByText(/Download image/);
  expect(linkElement).toBeInTheDocument();
});
