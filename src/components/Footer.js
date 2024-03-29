import React from 'react'
import { Link } from 'gatsby'
import { Agent } from './Agent'

import logo from '../img/davidson-logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ backgroundColor: "whitesmoke" }}>
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/listings">
                        Featured Properties
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/communities">
                      Communities
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/financing">
                        Financing
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <div className="row">
                  <img
                    src={logo}
                    alt="Davidson Logo"
                    style={{ width: 80 }}
                  />
                  <div className="realty-group">
                    <h4 className="lg">Davidson</h4>
                    <h4>Realty</h4>
                  </div>
                </div>
                <Agent hideImage={true} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
