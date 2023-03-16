import "./nav.scss";

import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/img/icons/search-icon.svg";

const Nav = ({ switchModal }) => {
  return (
    <div className="nav">
      <a className="logo" href="#">
        <QuoteLogo fill={"#ededed"} />
      </a>

      <ul>
        {/* <li>
          <a href="/authors">AUTHORS</a>
        </li>
        <li>
          <a href="/categories">CATEGORIES</a>
        </li> */}
      </ul>
      <button onClick={switchModal}>
        <SearchIcon stroke="#ededed" />
      </button>
    </div>
  );
};

export default Nav;
