import { forwardRef } from "react";
import BaseInput from "../input/BaseInput";
import ErrorMessage from "../input/ErrorMessage";
import RequiredAsterisk from "../input/RequiredAsterisk";
import { TITLE_STYLE } from "../input/input.styles";
import type { IInputProps } from "../input/input";

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

export interface ITextFieldProps extends Omit<IInputProps, "type"> {
  required?: boolean;
  label?: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ required, label, error, ...props }, ref) => {
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
  }
);

export default TextField;
