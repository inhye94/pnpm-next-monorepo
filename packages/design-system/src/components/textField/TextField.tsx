import BaseInput from "../input/BaseInput";
import ErrorMessage from "../input/ErrorMessage";
import RequiredAsterisk from "../input/RequiredAsterisk";
import type { IInputProps } from "../input/input";
import { TITLE_STYLE } from "../input/input.styles";

/**
 * TextField 컴포넌트
 * 
 * 특징: 
 * 1. input의 기본 attr를 상속받음
 * 2. type은 text
 *
 * @param {boolean} required 필수 항목에 별표 표시
 * @param {string} label 화면에 표시되는 타이틀
 * @param {string} error 에러메세지
 * 
 * 
 * @example
<TextField
  label="이름"
  placeholder="이름을 입력해주세요"
  name="name"
  value="default value"  
  error="앗 에러에요~!"
  required
/>
 */

export interface ITextFieldProps extends Omit<IInputProps, "type" | "ref"> {
  required?: boolean;
  label?: string;
  error?: string;
}

const TextField = ({
  required,
  label,
  error,
  ref,
  ...props
}: React.ComponentProps<typeof BaseInput> & ITextFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className={TITLE_STYLE}>
          {label}
          {required && <RequiredAsterisk />}
        </label>
      )}

      <BaseInput ref={ref} type="text" {...props} />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
export default TextField;
