import { Input } from '@nextui-org/react';
import { useState } from 'react';

type Props = {
  value: any;
  fieldName: string;
  onChange?: (value: string, fieldName: string) => void;
  onValidate?: () => void;
  label?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  type?: 'date' | 'datetime' | 'time';
};

function DateTimeField(props: Props) {
  const [value, setValue] = useState(props.value);

  const onValueChanged = (newValue: string) => {
    if (props.onChange) props.onChange(newValue, props.fieldName);
    setValue(newValue);
  };

  return (
    <div className={`dateTime-field`}>
      <Input
        label={props.label ?? props.fieldName}
        type={'date'}
        value={value}
        onValueChange={onValueChanged}
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
      />
    </div>
  );
}

export default DateTimeField;
