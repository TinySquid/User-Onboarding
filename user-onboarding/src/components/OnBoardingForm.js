import React from 'react'

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

/*
Requirements
    Name
    Email
    Password
    Terms of Service (checkbox)
    A Submit button to send our form data to the server.
*/
const OnBoardingForm = ({ values, errors, touched, isSubmitting, addUser }) => {
  return (
    <Form className="form">
      <h1>The Form Of Doom</h1>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" placeholder="Enter name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Enter email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Enter password" />
      </div>
      <div>
        <Field component="select" name="role">
          <option value="UX/UI Developer">UI/UX Developer</option>
          <option value="Front-End Engineer">Front-End Engineer</option>
          <option value="Back-End Engineer">Back-End Engineer</option>
        </Field>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="tos" checked={values.tos} />
          Accept TOS
      </label>
      </div>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, role, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      role: role || "",
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(4, "Name is invalid")
      .required("Name is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    //STRETCH
    /*
    Add to your existing handling so that, if a user inputs their email as waffle@syrup.com, they receive an error message 
    in their form that says "That email is already taken."
    */
    if (values.email === "waffle@syrup.com") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios.post('https://reqres.in/api/users', values)
        .then(response => {
          // console.log(response);
          resetForm();
          setSubmitting(false);
          props.addUser(response.data);
        })
        .catch(error => {
          console.log(error);
          setSubmitting(false);
        })
    }
  }
})(OnBoardingForm)

export default FormikLoginForm;
