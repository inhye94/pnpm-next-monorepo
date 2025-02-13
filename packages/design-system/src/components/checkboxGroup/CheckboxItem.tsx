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

/**
 * CheckboxItem 컴포넌트
 *
 * @param {string} name checkbox 필드명
 * @param {string} value checkbox 값
 * @param {string} label 화면에 표시되는 타이틀
 * @param {boolean} disabled 비활성화
 * @param {boolean} required 필수 항목
 * @param {boolean} checked 체크 여부
 * @param {function} onCheckedChange change 핸들러
 */

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
