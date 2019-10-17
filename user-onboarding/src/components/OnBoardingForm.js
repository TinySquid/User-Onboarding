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
const OnBoardingForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
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
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
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
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
  }
})(OnBoardingForm)

export default FormikLoginForm;
