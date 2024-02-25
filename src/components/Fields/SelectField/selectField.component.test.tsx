import { render } from '@testing-library/react';
import SelectField from './selectField.component';

describe('Date Time Field', () => {
  const renderComponent = (options?: any) => {
    render(
      <SelectField
        value={options?.value ?? []}
        fieldName={options?.fieldName ?? ''}
        onSelectionChange={options?.onSelectionChange ?? jest.fn()}
        onValidate={options?.onValidate ?? jest.fn()}
        label={options?.label ?? ''}
        isDisabled={options?.disabled}
      ></SelectField>
    );
  };

  test('Renders Date Tiem Field', () => {
    renderComponent(<SelectField value={[]} fieldName={''}></SelectField>);
  });
});
