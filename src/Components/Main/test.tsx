import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render something', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', { name: /teste react avançado/i })
    ).toBeInTheDocument();
  });
});
