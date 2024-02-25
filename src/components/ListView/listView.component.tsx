import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from '@nextui-org/react';
import { JSX } from 'react/jsx-runtime';
import { ColumnMap } from '../../models/columnMap.model';

export type ListProps = {
  headers: ColumnMap[];
  data: any[];
};

function ListView(props: ListProps) {
  const buildHeader = () => {
    return (
      <TableHeader>
        {props.headers?.map((h) => (
          <TableColumn
            key={h.key ?? h.displayValue}
            allowsSorting={h.allowSort}
            allowsResizing
            isRowHeader
          >
            {h.displayValue}
          </TableColumn>
        ))}
      </TableHeader>
    );
  };

  const buildBody = () => {
    const rows: JSX.Element[] = [];
    if (props.data && props.data.length > 0) {
      props.data?.forEach((dataRow, idx) =>
        rows.push(
          <TableRow key={`row ${idx}`}>{buildDataRow(dataRow)}</TableRow>
        )
      );
    }
    return <TableBody>{rows}</TableBody>;
  };

  const buildDataRow = (dataRow: any) => {
    return props.headers.map((column, idx) => {
      let value = '';
      if (
        dataRow.hasOwnProperty(column.valueProperty) &&
        !!column.valueProperty
      ) {
        value = dataRow[column.valueProperty];
      }
      if (column.transformer) {
        // Pass in the value to transform, otherwise the entire object (for transformers that handle that);
        value = column.transformer(value || dataRow);
      }
      return (
        <TableCell key={`${column.displayValue}-${value.toString()} - ${idx}`}>
          {value}
        </TableCell>
      );
    });
  };

  return (
    <div className="ListView">
      <Table>
        {buildHeader()}
        {buildBody()}
      </Table>
    </div>
  );
}

export default ListView;
