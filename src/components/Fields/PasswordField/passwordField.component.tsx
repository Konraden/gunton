import { Input } from '@nextui-org/react';
import { useState } from 'react';

type Props = {
  value: any;
  fieldName: string;
  onChange?: (value: string, fieldName: string) => void;
  onValidate?: () => void;
  label?: string;
  isDisabled?: boolean;
};

function PasswordField(props: Props) {
  const [value, setValue] = useState(props.value);

  const onValueChanged = (newValue: string) => {
    if (props.onChange) props.onChange(newValue, props.fieldName);
    setValue(newValue);
  };

  return (
    <div className="password-field">
      <Input
        label={props.label ?? props.fieldName}
        type={'password'}
        value={value}
        onValueChange={onValueChanged}
        isDisabled={props.isDisabled}
      />
    </div>
  );
}

export default PasswordField;
