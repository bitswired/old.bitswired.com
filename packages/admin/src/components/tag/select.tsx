import { useGetTags } from '../../hooks/tag';
import { SelectInput, SelectInputProps } from '../input/select';

export default function SelectTag(p: Omit<SelectInputProps, 'options'>): JSX.Element {
  const { tags } = useGetTags();

  const options = (tags || []).map((x) => ({ name: x.name, value: x.id }));

  return <SelectInput {...p} options={options} />;
}
