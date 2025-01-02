import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import ErrorMessage from "../input/ErrorMessage";
import RequiredAsterisk from "../input/RequiredAsterisk";
import { TITLE_STYLE } from "../input/input.styles";
import RadioItem from "./RadioItem";

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
      {title && (
        <h3 className={TITLE_STYLE}>
          {title}
          {props.required && <RequiredAsterisk />}
        </h3>
      )}
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
