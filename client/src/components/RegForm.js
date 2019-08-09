import React from 'react';
import { Form, Field, withFormik } from 'formik';

const RegForm = () => {
    return (
        <>
        <Form>
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </Form>
        </>
    )
};

const FormikRegForm = withFormik({})(RegForm);

export default FormikRegForm;