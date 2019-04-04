import React, { Component } from "react";

class Nav extends Component {
  state = {
    menuItems: [
      {
        id: 1,
        href: "Custom-software",
        title: "Custom software"
      },
      {
        id: 2,
        href: "Devops",
        title: "Devops & Infrastructure management"
      },
      {
        id: 3,
        href: "Blockchain",
        title: "Blockchain"
      },
      {
        id: 4,
        href: "Agile",
        title: "Agile & Project management"
      }
    ]
  };
  render() {
    return (
      <div className="nav-container">
        <nav>
          <div className="container nav-stack">
            <div className="row">
              <div className="nav-stack__upper">
                <div className="col-xs-6">
                  <a href="/">
                    <img
                      alt=""
                      className="logo"
                      src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-01-24/132528860086_7413e7ba0b8e242661ff_132.png"
                    />
                  </a>
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
                    <ul className="menu">
                      {this.state.menuItems.map(menuItem => (
                        <li key={menuItem.id}>
                          <a href={menuItem.href}>{menuItem.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="nav-mobile-toggle visible-sm visible-xs">
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
