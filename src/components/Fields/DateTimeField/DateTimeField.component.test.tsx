import { render } from '@testing-library/react';
import DateTimeField from './DateTimeField.component';

describe('Date Time Field', () => {
  const renderComponent = (options?: any) => {
    render(
      <DateTimeField
        value={options?.value ?? undefined}
        fieldName={options?.fieldName ?? ''}
        onChange={options?.onChange ?? jest.fn()}
        onValidate={options?.onValidate ?? jest.fn()}
        label={options?.label ?? ''}
        isDisabled={options?.disabled}
        isReadOnly={options?.isReadOnly}
        type={options?.type ?? 'Date'}
      ></DateTimeField>
    );
  };

  test('Renders Date Tiem Field', () => {
    renderComponent(
      <DateTimeField value={undefined} fieldName={''}></DateTimeField>
    );
  });
});
