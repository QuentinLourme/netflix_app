import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show);
  }
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className={show ? "links active" : "links"}>
        <Link onClick={() => showSwitch()} to="/">
          Accueil
        </Link>
        <Link onClick={() => showSwitch()} to="/shows">
          Séries
        </Link>
        <Link onClick={() => showSwitch()} to="/movies">
          Films
        </Link>
        <Link onClick={() => showSwitch()} to="/mylist">
          Ma liste
        </Link>
      </div>
      <div
        onClick={() => showSwitch()}
        className={show ? "bars-button active" : "bars-button"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
