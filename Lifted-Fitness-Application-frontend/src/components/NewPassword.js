function NewPassword() {
  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        postNewPassword(values);
        setSubmitting(false);
      }}
    >
      <Form noValidate onSubmit={handleSubmit} className={styles.formContainer}>
        <Row className="mb-5 text-center">
          <h1 className="text-success">Sign In</h1>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="signInEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="signInPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
            />

            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" variant="success">
          Reset Password <RiLoginBoxLine />
        </Button>
        <div className="my-3 justify-content-center align-items-center"></div>
      </Form>
    </Formik>
  );
}
