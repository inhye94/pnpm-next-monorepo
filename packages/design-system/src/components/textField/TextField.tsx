import BaseInput from "../input/BaseInput";
import ErrorMessage from "../input/ErrorMessage";
import RequiredAsterisk from "../input/RequiredAsterisk";
import type { IInputProps } from "../input/input";
import { TITLE_STYLE } from "../input/input.styles";

/**
 * 사용 예시
 * 
<TextField label="이름" placeholder="이름을 입력해주세요" required />

<TextField
  label="이름"
  placeholder="이름을 입력해주세요"
  name="name"
  value="default value"  
  error="앗 에러에요~!"
  disabled
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
