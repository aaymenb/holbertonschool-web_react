import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('testing signin form elements', () => {
  render(<Login />);

  const inputElements = screen.getAllByLabelText(/email|password/i);
  const emailLabelElement = screen.getByLabelText(/email/i);
  const passwordLabelElement = screen.getByLabelText(/password/i);
  const buttonElementText = screen.getByRole('button', { name: /ok/i });

  expect(inputElements).toHaveLength(2);
  expect(emailLabelElement).toBeInTheDocument();
  expect(passwordLabelElement).toBeInTheDocument();
  expect(buttonElementText).toBeInTheDocument();
});

test('it should check that the email input element will be focused whenever the associated label is clicked', async () => {
  render(<Login />);

  const emailInput = screen.getByLabelText(/email/i);
  const emailLabel = screen.getByText(/email/i);

  userEvent.click(emailLabel);

  await waitFor(() => {
    expect(emailInput).toHaveFocus();
  });
});

test('it should check that the password input element will be focused whenever the associated label is clicked', async () => {
  render(<Login />);

  const passwordLabel = screen.getByText(/password/i);
  const passwordInput = screen.getByLabelText(/password/i);

  userEvent.click(passwordLabel);

  await waitFor(() => {
    expect(passwordInput).toHaveFocus();
  });
});

test('submit button is disabled until both email and password are filled', () => {
  render(<Login />);

  const submitButton = screen.getByRole('button', { name: /ok/i });
  expect(submitButton).toBeDisabled();

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { name: 'email', value: 'account@domain.ext' },
  });
  expect(submitButton).toBeDisabled();

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { name: 'password', value: 'qwerty' },
  });
  expect(submitButton).not.toBeDisabled();
});

test('handleChangeEmail and handleChangePassword update controlled inputs', () => {
  render(<Login />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(emailInput, {
    target: { name: 'email', value: 'test@holberton.com' },
  });
  fireEvent.change(passwordInput, {
    target: { name: 'password', value: 'secret' },
  });

  expect(emailInput).toHaveValue('test@holberton.com');
  expect(passwordInput).toHaveValue('secret');
});
