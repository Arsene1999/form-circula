import "./styles.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="buttonStyle">
      <button type="submit" onClick={() => onClick()}>
        {text}
      </button>
    </div>
  );
}

export default Button;
