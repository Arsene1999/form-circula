import "./styles.scss";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <div className="buttonStyle">
      <button type="submit">{text}</button>
    </div>
  );
}

export default Button;
