import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="bg--dark footer-1 text-center-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <p>
                <em>Full-service</em> development blockchain devops and <br />{" "}
                agile company in Denver
              </p>
            </div>
            <div className="col-md-5 col-sm-8">
              <h6>Navigate</h6>
              <ul className="footer__navigation">
                <li>
                  <Link to="/custom-software">Custom software</Link>
                </li>
                <li>
                  <Link to="/devops">Devops & Infrastructure management</Link>
                </li>
                <li>
                  <Link to="/blockchain">Blockchain</Link>
                </li>
              </ul>
              <ul className="footer__navigation">
                {/* <li>
                                    <Link to ="IoT">IoT and Hardware</Link>
                                </li> */}
                <li>
                  <Link to="/agile">Agile & Project management</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12">
              <h6>Crushing it</h6>
              <p>Since 2011.</p>
            </div>
          </div>
          <div className="row footer__lower text-center-xs">
            <div className="col-sm-12">
              <hr />
            </div>
            <div className="col-sm-6">
              <span className="type--fine-print">
                © Copyright
                <span className="update-year">2018</span> arus.io - All Rights
                Reserved
              </span>
            </div>
            <div className="col-sm-6 text-right text-center-xs" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
