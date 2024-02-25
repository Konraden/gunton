import { render } from '@testing-library/react';
import TextField from './textField.component';

describe('Date Time Field', () => {
  const renderComponent = (options?: any) => {
    render(
      <TextField
        value={options?.value ?? undefined}
        fieldName={options?.fieldName ?? ''}
        onChange={options?.onChange ?? jest.fn()}
        onValidate={options?.onValidate ?? jest.fn()}
        label={options?.label ?? ''}
        isDisabled={options?.disabled}
      ></TextField>
    );
  };

  test('Renders Date Tiem Field', () => {
    renderComponent(<TextField value={undefined} fieldName={''}></TextField>);
  });
});
