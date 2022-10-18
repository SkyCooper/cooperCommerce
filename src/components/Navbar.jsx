import React from "react";

const Navbar = ({ cardTotal }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="home#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="home#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="home#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="home#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="home#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="home#">
                Disabled
              </a>
            </li>
          </ul>
          <button className="btn btn-xl btn-success nav-cart">
            Sepetim
            <span className="badge text-bg-danger ms-2">{cardTotal}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
