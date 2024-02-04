export interface ColumnMap {
  displayValue: string;
  valueProperty?: string;
  dataType?: string;
  sortProperty?: string;
  allowSort?: boolean;
  allowFilter?: boolean;
  allowsResizing?: boolean;
  key?: string;
  transformer?: (value: any, options?: any) => any;
}
