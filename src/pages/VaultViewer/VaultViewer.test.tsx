import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import VaultViewer from './VaultViewer';

describe('Vault Viewer', () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <VaultViewer />
      </MemoryRouter>
    );
  };

  test('Renders Page', () => {
    renderComponent();
  });
});
