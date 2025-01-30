import * as RadixCheckbox from "@radix-ui/react-checkbox";
import classNames from "classnames";
import Icon from "../icon";
import { LABEL_STYLE } from "../radioGroup/radio.styles";
import {
  CHECKBOX_CHECKED_STYLE,
  CHECKBOX_INDICATOR_STYLE,
  CHECKBOX_ITEM_STYLE,
  CHECKBOX_UNCHECKED_STYLE,
} from "./checkbox.styles";

export interface ICheckboxItemProps {
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: RadixCheckbox.CheckedState) => void;
}

const CheckboxItem = ({ value, label, ...props }: ICheckboxItemProps) => {
  return (
    <div className={CHECKBOX_ITEM_STYLE}>
      <RadixCheckbox.Root
        value={value}
        id={value}
        className={classNames(
          CHECKBOX_INDICATOR_STYLE,
          CHECKBOX_UNCHECKED_STYLE,
        )}
        {...props}
      >
        <Icon name="checkboxOutlined" className="text-label-assistive" />

        <RadixCheckbox.Indicator
          className={classNames(
            CHECKBOX_INDICATOR_STYLE,
            CHECKBOX_CHECKED_STYLE,
          )}
        >
          <Icon name="checkboxGhost" className="absolute text-white" />
          <Icon name="checkboxFilled" className="text-primary" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label htmlFor={value} className={LABEL_STYLE}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
