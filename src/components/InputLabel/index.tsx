import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import "./styles.scss";

interface InputLabelProp {
  text: string;
  disabled?: boolean;
  type?: "text" | "number";
  error?: FieldError;
  errorMensage?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputLabelProp> = (
  {
    text,
    type = "text",
    disabled = false,
    error,
    errorMensage,
    ...rest
  }: InputLabelProp,
  ref
) => {
  return (
    <>
      <label className="input">
        <input
          className="input__field"
          type={type}
          placeholder=" "
          ref={ref}
          disabled={disabled}
          {...rest}
        />
        <span className="input__label">{text}</span>
        {!!error && <span className="spanError">{errorMensage}</span>}
      </label>
    </>
  );
};

export const InputLabel = forwardRef(InputBase);
