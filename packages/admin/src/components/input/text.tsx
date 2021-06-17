import { StandardTextFieldProps, TextField } from '@material-ui/core';
import { ControllerProps, useController } from 'react-hook-form';

interface TextInputProps
  extends Omit<StandardTextFieldProps, 'defaultValue' | 'name' | 'variant'>,
    Omit<ControllerProps, 'render'> {
  variant?: 'standard' | 'outlined' | 'filled';
}

export function TextInput({ control, rules, name, variant = 'standard', ...p }: TextInputProps) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ''
  });

  return (
    <TextField
      style={{ width: '100%' }}
      {...inputProps}
      inputRef={ref}
      {...p}
      variant={variant}
      error={!!error}
      helperText={error?.type === 'required' ? 'Required' : ''}
    />
  );
}
