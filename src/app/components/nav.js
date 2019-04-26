import React, { Component } from "react";
import { Link } from "react-router-dom";

const Items = [
  {
    id: 1,
    href: "/custom-software",
    title: "Custom software"
  },
  {
    id: 2,
    href: "/devops",
    title: "Devops & Infrastructure management"
  },
  {
    id: 3,
    href: "/blockchain",
    title: "Blockchain"
  },
  {
    id: 4,
    href: "/agile",
    title: "Agile & Project management"
  }
];
class Nav extends Component {
  state = {
    open: false
  };

  render() {
    const { open } = this.state;
    return (
      <div className="nav-container">
        <nav className={open ? "nav-open" : ""}>
          <div className="container nav-stack">
            <div className="row">
              <div className="nav-stack__upper">
                <div className="col-xs-6">
                  <Link to="/">
                    <img
                      alt=""
                      className="logo"
                      src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-01-24/132528860086_7413e7ba0b8e242661ff_132.png"
                    />
                  </Link>
                </div>
                <div className="col-xs-6 text-right">
                  <a href="#top" className="btn btn--sm btn--square">
                    <span className="btn__text">Contact Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="nav-bar">
                  <div className="nav-module logo-module left" />
                  <div className="nav-module menu-module left">
                    <ul className={`menu ${open ? "" : ""}`}>
                      {Items.map(menuItem => (
                        <li key={menuItem.id}>
                          <Link to={menuItem.href}>{menuItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="nav-mobile-toggle visible-sm visible-xs"
                  onClick={() => this.setState({ open: !open })}
                >
                  <i className="icon-Align-Right icon icon--sm" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
