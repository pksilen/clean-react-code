import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

describe('App', () => {
  it('should show initial count of zero', () => {
    // GIVEN
    expect.assertions(1);

    // WHEN
    render(<App />);

    // THEN
    expect(screen.getByRole('button')).toHaveTextContent(/count is 0/i);
  });

  it('should increment count on button click', async () => {
    // GIVEN
    expect.assertions(1);
    render(<App />);
    const buttonElement = screen.getByRole('button');

    // WHEN
    await userEvent.click(buttonElement);

    // THEN
    expect(buttonElement).toHaveTextContent(/count is 1/i);
  });
});
