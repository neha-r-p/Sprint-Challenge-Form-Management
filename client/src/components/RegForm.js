import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const RegForm = (props) => {
  // console.log(props)
  const { values, errors, touched, status } = props
  
  // const [users, setUsers] = useState([]);
 
  
  // useEffect(() => {
  //   if (status) {
  //     setUsers([...users, status]);
  //   }
  // }, [status]);

  return (
    <>
      <Form>
        <label>
          Username:
          <br /> <Field type="text" name="username" placeholder="Username" />
        </label>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <label>
          Password: <br />
          <Field type="password" name="password" placeholder="Password" />
        </label>
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
  }),

  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log(values)
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log(res.data)
        setStatus(res.data)
        
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(RegForm);

export default FormikRegForm;
