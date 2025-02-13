import { TITLE_STYLE } from "../input/input.styles";
import RequiredAsterisk from "../input/RequiredAsterisk";
import { IRadioRootProps } from "./RadioGroup";

/**
 * InputGroupTitle 컴포넌트
 *
 * @param {string} title 화면에 표시되는 타이틀
 * @param {boolean} required 필수 항목에 별표 표시
 */

type ITitleType = Pick<IRadioRootProps, "title" | "required">;

const InputGroupTitle = ({ title, required }: ITitleType) => {
  return (
    <h3 className={TITLE_STYLE}>
      {title}
      {required && <RequiredAsterisk />}
    </h3>
  );
};

export default InputGroupTitle;
