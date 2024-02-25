import { render, screen } from '@testing-library/react';
import AppPage from './AppPage';

describe('App Page', () => {
  test('Renders App Page', () => {
    const contents = 'App Page Rendered';
    render(
      <AppPage>
        <p>{contents}</p>
      </AppPage>
    );

    expect(screen.getByText(contents)).toBeInTheDocument();
  });
});
