import { fireEvent, render, screen } from '@testing-library/react';
import { ColumnMap } from '../../models/columnMap.model';
import ListView from './listView.component';

const renderComponent = (options?: any) => {
  render(
    <ListView
      headers={options?.headers ?? []}
      data={options?.data ?? []}
    ></ListView>
  );
};

describe('List View Component', () => {
  let data = [
    {
      name: 'Eggs'
    },
    {
      name: 'Sausage'
    }
  ];
  let headers: ColumnMap[] = [
    {
      valueProperty: 'name',
      displayValue: 'Name',
      dataType: '',
      sortProperty: '',
      allowSort: false,
      allowFilter: false,
      allowsResizing: false,
      key: '',
      transformer: jest.fn()
    }
  ];
  beforeEach(() => {});

  test('Component Renders', () => {
    renderComponent();
  });

  describe('Headers', () => {
    test('Component Renders Headers', () => {
      renderComponent({ headers });
      expect(screen.getByText('name')).toBeInTheDocument();
    });
    test('Allows Sorting', () => {
      headers[0].allowSort = true;
      renderComponent({ headers, data });
      const headerCol = screen.getByText('name');
      const eggs = screen.getByText('eggs');
      const sausage = screen.getByText('sausage');

      //eggs is before sausage
      expect(eggs.compareDocumentPosition(sausage)).toEqual(
        Node.DOCUMENT_POSITION_FOLLOWING
      );

      fireEvent.click(headerCol);

      //eggs is after sausage
      expect(eggs.compareDocumentPosition(sausage)).toEqual(
        Node.DOCUMENT_POSITION_PRECEDING
      );
    });
    test('Disables Sorting', () => {
      headers[0].allowSort = false;
      renderComponent({ headers, data });
      const headerCol = screen.getByText('name');
      const eggs = screen.getByText('eggs');
      const sausage = screen.getByText('sausage');

      //eggs is before sausage
      expect(eggs.compareDocumentPosition(sausage)).toEqual(
        Node.DOCUMENT_POSITION_FOLLOWING
      );

      fireEvent.click(headerCol);

      //eggs is still before sausage -- sorting is disabled;
      expect(eggs.compareDocumentPosition(sausage)).toEqual(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
    });
  });
  describe('Rows', () => {
    test('Renders rows when data is present', () => {
      renderComponent({ headers, data });
      expect(screen.getByText('eggs')).toBeInTheDocument();
    });
  });
  describe('Cells', () => {
    test('Renders cells when data is present', () => {
      renderComponent({ headers, data });
      expect(screen.getByText('eggs')).toBeInTheDocument();
    });
  });
});
