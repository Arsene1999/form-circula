import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import "./styles.scss";

interface InputCheckboxProp {
  text: string;
}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputCheckboxProp
> = ({ text, ...rest }: InputCheckboxProp, ref) => {
  const [check, setCheck] = useState(false);

  return (
    <label className={check ? "labelCheckedCSS" : "labelCSS"}>
      <input
        type="checkbox"
        onClick={() => {
          setCheck((previous) => !previous);
        }}
        ref={ref}
        {...rest}
      />
      {text}
    </label>
  );
};

export const InputCheckbox = forwardRef(CheckboxBase);
