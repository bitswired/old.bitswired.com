import { Switch, SwitchProps } from '@material-ui/core';
import { ControllerProps, useController } from 'react-hook-form';

interface TextInputProps
  extends Omit<SwitchProps, 'defaultValue' | 'name' | 'variant'>,
    Omit<ControllerProps, 'render'> {
  variant?: 'standard' | 'outlined' | 'filled';
}

export function SwitchInput({ control, rules, name, ...p }: TextInputProps) {
  const {
    field: { ref, value, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    // rules: { required: true },
    defaultValue: ''
  });

  return (
    <Switch
      {...inputProps}
      inputRef={ref}
      checked={value}
      {...p}
      // error={!!error}
      // helperText={error?.type === 'required' ? 'Required' : ''}
    />
  );
}
