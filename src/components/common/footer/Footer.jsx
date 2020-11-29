import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';
import {CourseButton} from '../../index';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
      return (
            <MDBFooter color="primary" className="footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
              <CourseButton type='navigation' to="/about">About</CourseButton>
              <CourseButton type='navigation' to="/help">Help</CourseButton>
              <CourseButton type='navigation' to="/contact">Contact</CourseButton>
              <CourseButton type='navigation' to="/terms">Terms</CourseButton>
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