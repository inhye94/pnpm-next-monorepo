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

/**
 * RadioItem 컴포넌트
 *
 * 특징:
 * 1. 웹 접근성 개선: radix-ui의 RadixRadioGroup을 커스텀
 *
 * @param {string} value radio 값
 * @param {string} label 화면에 표시되는 radio 값
 * @param {boolean} required 필수 항목
 * @param {boolean} disabled 비활성화
 *
 * @example <RadioGroup.Item value="123" label="123" />
 */

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
