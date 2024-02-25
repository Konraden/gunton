import { render } from '@testing-library/react';
import PasswordField from './passwordField.component';

describe('Date Time Field', () => {
  const renderComponent = (options?: any) => {
    render(
      <PasswordField
        value={options?.value ?? undefined}
        fieldName={options?.fieldName ?? ''}
        onChange={options?.onChange ?? jest.fn()}
        onValidate={options?.onValidate ?? jest.fn()}
        label={options?.label ?? ''}
        isDisabled={options?.disabled}
      ></PasswordField>
    );
  };

  test('Renders Date Tiem Field', () => {
    renderComponent(
      <PasswordField value={undefined} fieldName={''}></PasswordField>
    );
  });
});
