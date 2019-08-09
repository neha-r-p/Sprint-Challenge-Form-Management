import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const RegForm = ({ errors, touched }) => {
  return (
    <>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const FormikRegForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required")
  })
})(RegForm);

export default FormikRegForm;
