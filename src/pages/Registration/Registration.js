import React from 'react';

import { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './registration.css';
import Layout from '../../components/layouts/Layout';

// class Registration extends Component {
// render() {
const Registration = () => {
  return (
    <Layout>
      <Container fluid className="signup_page">
        <form fluid className="signup_page">
          <h1 className="shadow-sm  mt-5 p-3 text-center rounded">Register</h1>
          <div className="form-group row justify-content-center">
            <label htmlFor="name" className="col-sm-1 col-form-label">
              Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                pattern="[A-Z a-z]{3,}"
                title="Name must contain only letters and must be more then 3 letters"
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="email" className="col-sm-1 col-form-label">
              Email
            </label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                title="Please enter a valid email address"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center">
            <label htmlFor="age" className="col-sm-1 col-form-label">
              Age
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" required />
            </div>
          </div>

          <div className="form-group row justify-content-center">
            <label htmlFor="role" className="col-sm-1 col-form-label">
              Phone
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Must be 11 digits"
                required
                pattern="[0-9]{10,}"
                title="Phone number must contain a minimum of 10 digits"
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="password" className="col-sm-1 col-form-label">
              Password
            </label>
            <div className="col-sm-4">
              <input type="password" className="form-control" required />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="password" className="col-sm-1 col-form-label">
              Confirm Password
            </label>
            <div className="col-sm-4">
              <input type="password" className="form-control" required />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-2">
              <button type="submit" class="btn  btn-block add_btn">
                SIGNUP
              </button>
            </div>
          </div>

          <div className="form-group row justify-content-center">
            <p>
              If you have an account already, <Link to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </Container>
    </Layout>
  );
};

export default Registration;
