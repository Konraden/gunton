import { Select, Selection, SelectItem } from '@nextui-org/react';
import { useState } from 'react';

type Props = {
  value: string[];
  fieldName: string;
  onSelectionChange?: (values: string[], fieldName: string) => void;
  onValidate?: () => void;
  label?: string;
  isDisabled?: boolean;
  selectionList?: { label: string; value: string }[];
};

function SelectField(props: Props) {
  const [selectedValues, setSelectedValues] = useState(new Set(props.value));

  const onSelectionChanged = (newValues: Selection) => {
    setSelectedValues(new Set(newValues.toString()));
    if (props.onSelectionChange) {
      props.onSelectionChange(
        Array.from(selectedValues.keys.toString()),
        props.fieldName
      );
    }
  };

  const buildList = () => {
    if (props.selectionList) {
      return props.selectionList.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ));
    }
    return <></>;
  };

  return (
    <div className="dropdown-field">
      <Select
        label={props.label ?? props.fieldName}
        className="max-w-xs"
        onSelectionChange={onSelectionChanged}
        selectedKeys={selectedValues}
      >
        {buildList()}
      </Select>
    </div>
  );
}

export default SelectField;
