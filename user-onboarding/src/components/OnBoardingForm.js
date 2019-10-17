import React from 'react'

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

/*
Requirements
    Name
    Email
    Password
    Terms of Service (checkbox)
    A Submit button to send our form data to the server.
*/
const OnBoardingForm = ({ values, isSubmitting }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Enter name" />
      <Field type="email" name="email" placeholder="Enter email" />
      <Field type="password" name="password" placeholder="Enter password" />
      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
        Accept TOS
      </label>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
    };
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
  }
})(OnBoardingForm)

export default FormikLoginForm;
