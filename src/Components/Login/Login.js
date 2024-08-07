import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
    sessionStorage.setItem("token", JSON.stringify(values))
    window.location.reload();
  };

  return (
    <div className='log-in'>
    <div className="login-container">
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="form-group ">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <a href="#" className="forgot-password">Forget Password?</a>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>

            <div className="signup-link">
              <p>Not a Member? <a href="#">Signup</a></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Login;
