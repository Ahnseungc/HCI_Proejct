import { FunctionComponent } from "react";
import { InputLayout } from "./styles";
import { InputType } from "@type/Tb";

const SignUpInput: FunctionComponent<InputType> = ({
  placeholder,
  readonly,
  disabled,
  error,
  type,
  inputtype,
  id,
  onChange,
  value,
  maxlength,
}) => {
  return (
    <InputLayout
      type={type}
      id={id}
      placeholder={placeholder}
      readOnly={readonly}
      disabled={disabled}
      error={error}
      Inputtype={inputtype}
      onChange={onChange}
      value={value}
      maxLength={maxlength}
    />
  );
};

export default SignUpInput;
