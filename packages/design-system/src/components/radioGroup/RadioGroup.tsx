import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import ErrorMessage from "../input/ErrorMessage";
import RadioItem from "./RadioItem";
import InputGroupTitle from "./InputGroupTitle";

export interface IRadioRootProps {
  title: string;
  name: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  loop?: boolean;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

const RadioGroup = ({ title, error, children, ...props }: IRadioRootProps) => {
  return (
    <RadixRadioGroup.Root {...props}>
      {title && <InputGroupTitle title={title} required={props.required} />}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </RadixRadioGroup.Root>
  );
};

RadioGroup.Root = RadioGroup;
RadioGroup.Item = RadioItem;

RadioGroup.displayName = "RadioGroup";
RadioGroup.Item.displayName = "RadioItem";

export default RadioGroup;
