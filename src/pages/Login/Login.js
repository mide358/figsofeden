import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/config';
import Layout from '../../components/layouts/Layout';
// import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout className="login_page">
      <h1 className=" mt-5 p-3 text-center rounded">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group row login_group justify-content-center">
          <label htmlFor="email" className="col-sm-1 col-form-label">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row login_group justify-content-center">
          <label htmlFor="password" className="col-sm-1 col-form-label">
            Password
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row login_group_btn justify-content-center">
          <div className="col-sm-2">
            <button
              onClick={signInWithGoogle}
              type="submit"
              className="btn  btn-block login_btn"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
