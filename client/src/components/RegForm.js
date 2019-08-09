import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from 'yup';

const RegForm = (props) => {
    console.log(props)
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

  validationSchema: yup,

})(RegForm);

export default FormikRegForm;
