import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import {
  RADIO_CHECKED_STYLE,
  RADIO_ITEM_STYLE,
  RADIO_UNCHECKED_STYLE,
  LABEL_STYLE,
} from "./radio.styles";

export interface IRadioItemProps {
  value: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
}

const RadioItem = ({ value, label, ...props }: IRadioItemProps) => {
  return (
    <div className={RADIO_ITEM_STYLE}>
      <RadixRadioGroup.Item
        value={value}
        id={value}
        className={classNames(RADIO_UNCHECKED_STYLE)}
        {...props}
      >
        <RadixRadioGroup.Indicator className={RADIO_CHECKED_STYLE} />
      </RadixRadioGroup.Item>

      <label htmlFor={value} className={LABEL_STYLE}>
        {label}
      </label>
    </div>
  );
};

RadioItem.displayName = "RadioItem";

export default RadioItem;
