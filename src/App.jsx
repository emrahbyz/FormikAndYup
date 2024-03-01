import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import React from "react";
import "./App.css";

const App = () => {
  const SignupSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Too Short")
      .max(70, "Too Long")
      .required("This field is required"),
    lastName: yup
      .string()
      .min(2, "Too Short")
      .max(40, "Too Long")
      .required("This field is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("This field is required"),
    password: yup
      .string()
      .min(8, "Too Short Min 8 Charecter")
      .max(40, "Too Long")
      .required("This field is required"),
  });
  return (
    <div className="App">
      <h1>Signup</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          alert([
            values.firstName,
            values.email,
            values.lastName,
            values.password,
          ]);
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="firstName"
              className="formControl"
              placeholder="Enter First Name"
            />
            {errors.firstName ? (
              <div className="alert"> {errors.firstName} </div>
            ) : null}
            <Field
              name="lastName"
              className="formControl"
              placeholder="Enter Last Name"
            />
            {errors.lastName ? (
              <div className="alert"> {errors.lastName} </div>
            ) : null}
            <Field
              name="email"
              className="formControl"
              placeholder="Enter Email"
            />
            {errors.email ? (
              <div className="alert"> {errors.email} </div>
            ) : null}
            <Field
              name="password"
              className="formControl"
              placeholder="Enter Password"
              type="password"
            />
            {errors.password ? (
              <div className="alert"> {errors.password} </div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
