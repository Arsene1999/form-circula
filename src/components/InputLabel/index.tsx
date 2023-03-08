import { forwardRef, ForwardRefRenderFunction } from "react";
import "./styles.scss";

interface InputLabelProp {
  text: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputLabelProp> = (
  { text, ...rest }: InputLabelProp,
  ref
) => {
  return (
    <>
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          ref={ref}
          {...rest}
        />
        <span className="input__label">{text}</span>
      </label>
    </>
  );
};

export const InputLabel = forwardRef(InputBase);
