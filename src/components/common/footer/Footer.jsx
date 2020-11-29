import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
      return (
            <MDBFooter color="primary" className="footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <h5>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        <MDBContainer>
          &copy; Copyright:
        </MDBContainer>
    </MDBFooter>
      )
}
export default Footer;