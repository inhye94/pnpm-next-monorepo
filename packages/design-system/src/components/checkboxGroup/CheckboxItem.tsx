import * as RadixCheckbox from "@radix-ui/react-checkbox";
import classNames from "classnames";
import CheckBoxIcon from "../icon/CheckboxIcon";
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
          CHECKBOX_UNCHECKED_STYLE
        )}
        {...props}
      >
        {<CheckBoxIcon className="text-label-assistive" variant="outlined" />}

        <RadixCheckbox.Indicator
          className={classNames(
            CHECKBOX_INDICATOR_STYLE,
            CHECKBOX_CHECKED_STYLE
          )}
        >
          <CheckBoxIcon className="text-common-100 absolute" variant="ghost" />
          <CheckBoxIcon className="text-primary" variant="filled" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label htmlFor={value} className={LABEL_STYLE}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
