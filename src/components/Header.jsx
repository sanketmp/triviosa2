import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        triviosa<span className="dox">.</span>
      </Link>
    </div>
  );
};

export default Header;
