import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container"
import { RiLoginBoxLine } from "react-icons/ri";
import styles from "./styles/SignIn.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';

function ResetPssword() {
    const navigate = useNavigate();

    const PostSignInInfo = async (values) => {
        const response = await axios({
            method: "POST",
            url: "/api/v1/users/resetPassword",
            data: {
                email: values.email,
            },
        });

        if (response.data !== null && response.data.status === "fail") {
            showWarningToast(response.data.message);
        }

    }
    
  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Formik
        //validationSchema={schema}
        initialValues={{
          email: "",
          
        }}
        onSubmit={(values, { setSubmitting }) => {
          PostSignInInfo(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInValid,
          errors,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={styles.formContainer}
          >
            <Row className="mb-5 text-center">
              <h1 className="text-success">Reset Password</h1>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="newPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.newPssword}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid Email
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" variant="success">
              Reset Password <RiLoginBoxLine />
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
export default ResetPssword;