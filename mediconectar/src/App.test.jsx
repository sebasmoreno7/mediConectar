import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens a demo role without collecting credentials', () => {
  window.history.pushState({}, '', '/sign-in');
  render(<App />);

  expect(screen.getByText(/demo sin cuentas ni autenticación/i)).toBeInTheDocument();
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  expect(document.querySelector('input[type="password"]')).not.toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/vista de ejemplo/i), { target: { value: 'doctor' } });
  fireEvent.click(screen.getByRole('button', { name: /ver vista/i }));
  expect(screen.getByText('Médico Especialista')).toBeInTheDocument();
});

test('registration page explains that accounts are unavailable', () => {
  window.history.pushState({}, '', '/sign-up');
  render(<App />);

  expect(screen.getByText(/registro no disponible/i)).toBeInTheDocument();
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  expect(document.querySelector('input[type="password"]')).not.toBeInTheDocument();
});
