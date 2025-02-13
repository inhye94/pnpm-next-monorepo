import ErrorMessage from "../input/ErrorMessage";
import InputGroupTitle from "../radioGroup/InputGroupTitle";
import type { IRadioRootProps } from "../radioGroup/RadioGroup";
import CheckboxItem from "./CheckboxItem";

/**
 * CheckboxGroup 컴포넌트
 *
 * 특징:
 * 1. 웹 접근성 개선: radix-ui의 RadixCheckbox를 커스텀
 * 2. CCP 패턴으로, 내부 구조를 자유롭게 구성할 수 있습니다.
 *
 * @param {string} title 화면에 표시되는 타이틀
 * @param {string} error 에러 메세지
 * @param {React.ReactNode} children dropdown body
 * 
 * @example
<CheckboxGroup.Root title="타이틀" required>
  <CheckboxGroup.Item value="12345" label="123" name="www" disabled />
  <CheckboxGroup.Item value="23456" label="123" name="www" />
  <CheckboxGroup.Item value="34567" label="456" name="www" />
</CheckboxGroup.Root>
 */

export type ICheckboxRootProps = Pick<
  IRadioRootProps,
  "title" | "error" | "children" | "required"
>;

const CheckboxGroup = ({
  title,
  error,
  children,
  ...props
}: ICheckboxRootProps) => {
  return (
    <div>
      {title && <InputGroupTitle title={title} required={props.required} />}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

CheckboxGroup.Root = CheckboxGroup;
CheckboxGroup.Item = CheckboxItem;

export default CheckboxGroup;
