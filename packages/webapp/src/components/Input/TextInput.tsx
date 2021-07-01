import { Input, InputProps } from '@chakra-ui/react';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { ControllerProps, useController } from 'react-hook-form';

export interface TextInputProps
  // extends Omit<StandardTextFieldProps, 'defaultValue' | 'name' | 'variant'>,
  extends Omit<InputProps, 'defaultValue'>,
    Omit<ControllerProps, 'render'> {
  name: string;
  label?: string;
}

export default function TextInput({
  control,
  rules,
  name,
  label,
  ...p
}: TextInputProps): JSX.Element {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    rules,
    defaultValue: ''
  });

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input isInvalid={invalid} {...inputProps} inputRef={ref} {...p} />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
}
