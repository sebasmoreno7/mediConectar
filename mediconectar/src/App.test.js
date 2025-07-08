import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MediConectar link', () => {
  render(<App />);
  const linkElement = screen.getByText(/MediConectar/i);
  expect(linkElement).toBeInTheDocument();
});
