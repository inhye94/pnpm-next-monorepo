import ErrorMessage from "../input/ErrorMessage";
import InputGroupTitle from "../radioGroup/InputGroupTitle";
import type { IRadioRootProps } from "../radioGroup/RadioGroup";
import CheckboxItem from "./CheckboxItem";

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
