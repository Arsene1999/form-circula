import { forwardRef, ForwardRefRenderFunction } from "react";
import "./styles.scss";

interface InputLabelProp {
  text: string;
  disabled?: boolean;
  type?: "text" | "number";
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputLabelProp> = (
  { text, type = "text", disabled = false, ...rest }: InputLabelProp,
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
      </label>
    </>
  );
};

export const InputLabel = forwardRef(InputBase);
