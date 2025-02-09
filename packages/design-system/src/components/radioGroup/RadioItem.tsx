import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import Icon from "../icon";
import {
  LABEL_STYLE,
  RADIO_CHECKED_STYLE,
  RADIO_INDICATOR_STYLE,
  RADIO_ITEM_STYLE,
  RADIO_UNCHECKED_STYLE,
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
        className={classNames(RADIO_INDICATOR_STYLE, RADIO_UNCHECKED_STYLE)}
        {...props}
      >
        <Icon name="radioOutlined" className="text-label-assistive" />

        <RadixRadioGroup.Indicator
          className={classNames(RADIO_INDICATOR_STYLE, RADIO_CHECKED_STYLE)}
        >
          <Icon name="radioFilled" className="text-primary" />
        </RadixRadioGroup.Indicator>
      </RadixRadioGroup.Item>

      <label htmlFor={value} className={LABEL_STYLE}>
        {label}
      </label>
    </div>
  );
};

RadioItem.displayName = "RadioItem";

export default RadioItem;
