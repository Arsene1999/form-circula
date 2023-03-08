import Logo from "../../assets/svg/LOGO";
import "./styles.scss";

function Header() {
  return (
    <>
      <header className="headerCSS">
        <div>
          <Logo />
        </div>
      </header>
      <div className="subHeader"></div>
    </>
  );
}

export default Header;
