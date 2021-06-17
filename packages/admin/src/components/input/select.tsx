import { MenuItem, Select, SelectProps } from '@material-ui/core';
import { multiply } from 'lodash';
import { ControllerProps, useController } from 'react-hook-form';

interface Option {
  name: string;
  value: string | number;
}

export interface SelectInputProps
  extends Omit<SelectProps, 'defaultValue' | 'name' | 'variant'>,
    Omit<ControllerProps, 'render'> {
  options: Option[];
  variant?: 'standard' | 'outlined' | 'filled';
}

export function SelectInput({
  control,
  rules,
  name,
  variant = 'standard',
  options,
  ...p
}: SelectInputProps) {
  const {
    field: { ref, value, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ''
  });

  console.log(error, value, 'a');

  return (
    <Select
      style={{ width: '100%' }}
      {...inputProps}
      inputRef={ref}
      variant={variant}
      {...p}
      label="Jdak"
      value={multiply && !value ? [] : value}>
      {options.map(({ value, name }) => (
        <MenuItem key={value} value={value}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
}
