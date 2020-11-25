import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const Footer = () => {
      return (
            <div className="footer">
                  <ul>
                        <li>
                              <Link to="/about">
                                    About
                              </Link>
                        </li>
                        <li>
                              <Link to="/terms">
                                    Terms
                              </Link>
                        </li>
                        <li>
                              <Link to="/help">
                                    Help
                              </Link>
                        </li>
                        <li>
                              <Link to="/contact">
                                    Contact
                              </Link>
                        </li>
                  </ul>
                  <h5> &copy; 2020 </h5>
            </div>
      )
}
export default Footer;