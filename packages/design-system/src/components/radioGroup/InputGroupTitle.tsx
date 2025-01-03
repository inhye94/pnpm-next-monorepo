import { TITLE_STYLE } from "../input/input.styles";
import RequiredAsterisk from "../input/RequiredAsterisk";
import { IRadioRootProps } from "./RadioGroup";

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
