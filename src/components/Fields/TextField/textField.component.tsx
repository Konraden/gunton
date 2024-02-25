import { Input } from '@nextui-org/react';
import { useState } from 'react';

type Props = {
  value: any;
  fieldName: string;
  onChange?: (value: string, fieldName: string) => void;
  onValidate?: () => void;
  label?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
};

function TextField(props: Props) {
  const [value, setValue] = useState(props.value);

  const onValueChanged = (newValue: string) => {
    if (props.onChange) props.onChange(newValue, props.fieldName);
    setValue(newValue);
  };

  return (
    <div className="text-field">
      <Input
        label={props.label ?? props.fieldName}
        type={'text'}
        value={value}
        onValueChange={onValueChanged}
        isDisabled={props.isDisabled}
        isRequired={props.isRequired}
      />
    </div>
  );
}

export default TextField;
