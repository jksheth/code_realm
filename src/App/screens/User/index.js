import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import uuidv1 from 'uuid'

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
});

const initialValues = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  phone: '',
  address: '',
  seeking: 'actively',
  remote: false,
}

const User = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // Save record - JSON.stringify(values, null, 2)
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Add/Edit</h1>
        <Formik
          initialValues={initialValues}
          validattionSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
          <Form>
            <div class="row">
              <div class="user-form--left-column col-sm-6">

                <div class="form-group">
                  <Field name="ID" className="form-control disabled" value={uuidv1()} disabled />
                </div>

                <div class="form-group">
                  <Field name="firstName" className="form-control" placeholder="First Name" />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div class="form-group">
                  <Field name="lastName" className="form-control" placeholder="Last Name" />
                  <ErrorMessage name="lastName" component="div" />
                </div>

                <div class="form-group">
                  <Field type="email" className="form-control" name="email" />
                  <ErrorMessage name="email" component="div" placeholder="Email" />
                </div>

                <div class="form-group">
                  <Field type="text" name="phone" className="form-control" placeholder="Phone" />
                  <ErrorMessage name="phone" component="div" />
                </div>
              </div>

              <div class="user-form--right-column col-sm-6">

                <div class="form-group">
                  <Field type="text" name="age" placeholder="Age" className="form-control" />
                  <ErrorMessage name="age" component="div" />
                </div>

                <div class="form-group">
                  <select name="seeking" placeholder="Seeking Job" className="form-control">
                    <option value="actively">Actively</option>
                    <option value="non-actively">Non Actively</option>
                  </select>
                  <ErrorMessage name="seeking" component="div" />
                </div>

              </div>

            </div>

            <div class="form-group">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Submit
              </button>
            </div>

          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default User;
