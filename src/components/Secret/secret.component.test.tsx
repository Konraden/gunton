import { render } from '@testing-library/react';
import Secret from './secret.component';
import { ISecret } from '../../models/secret.model';
import { SecretType } from '../../enums/secretType.enum';

describe('Secret', () => {
  let mockSecret: ISecret = {
    revisionDate: new Date(),
    creationDate: new Date(),
    id: '',
    type: SecretType.Login,
    reprompt: 0,
    name: '',
    favorite: false,
    login: {
      username: '',
      password: '',
      uris: []
    }
  };
  const renderComponent = () => {
    render(<Secret secret={mockSecret}></Secret>);
  };

  test('Renders Secret', () => {
    renderComponent();
  });
});
