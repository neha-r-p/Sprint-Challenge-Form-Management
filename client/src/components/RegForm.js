import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const RegForm = props => {
  console.log(props);
  return (
    <>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
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
