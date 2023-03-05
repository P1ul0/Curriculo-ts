import img from "../../assets/img_64.png"
import "./style.css"
function Header() {
  return (
      <header className="header">
        <img className="img_header" src={img}></img>
        <p className="title_header"> Curriculo</p>
      </header>
  );
}

export default Header;
