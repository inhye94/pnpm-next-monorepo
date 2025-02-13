import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import ErrorMessage from "../input/ErrorMessage";
import InputGroupTitle from "./InputGroupTitle";
import RadioItem from "./RadioItem";

/**
 * RadioGroup 컴포넌트
 * 
 * 특징: 
 * 1. 웹 접근성 개선: radix-ui의 RadixCheckbox를 커스텀
 * 2. CCP 패턴이므로 내부 구조를 자유롭게 구성할 수 있습니다.
 *
 * @param {string} title 화면에 표시되는 타이틀
 * @param {string} name radio 필드명
 * @param {string} error 에러메세지
 * @param {string} defaultValue 기본값
 * @param {boolean} required 필수 항목
 * @param {boolean} disabled 비활성화
 * @param {boolean} loop 키보드 조작할 때 loop
 * @param {React.ReactNode} children 그룹 내부에 들어갈 컴포넌트
 * @param {function} onValueChange change 핸들러
 * 
 * @example
<RadioGroup.Root error="에러메세지" title="타이틀" name="필드명" required>
  <RadioGroup.Item value="123" label="123" />
  <RadioGroup.Item value="456" label="456" />
</RadioGroup.Root>
 */

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
