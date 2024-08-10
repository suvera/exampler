import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { api } from '../../api/api';
import './login.css';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };
const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (params) => {
    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        // Convert params object to URL-encoded string
        const urlEncodedData = new URLSearchParams(params).toString();

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: urlEncodedData,
        };

        const response = await fetch(api.endpoints.auth.login, requestOptions);
        if (response.ok) { 
            const responseData = await response.json();
            console.log(responseData); 
            const { statusCode, message, data, error = "" } = responseData;
            console.log(message, data);
            if (statusCode === 200) {
                navigate("/");
                window.location.reload();
            } else {
                window.alert(error);
            }
        } else {
            console.error("HTTP error:", response.status);
            window.alert("Request failed with status: " + response.status);
        }
    } catch (e) {
        console.error("Error occurred:", e);
        window.alert("Something went wrong, please try again");
    }
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
