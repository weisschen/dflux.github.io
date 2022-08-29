import React from 'react';
import { Formik } from 'formik';
import styles from './styles.module.css';


var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const Basic = () => (
  <div className="contactForm">
    <h2>Let's Talk</h2>
    <Formik
      initialValues={{ email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
        setTimeout(() => {
          base('mail_list').create([
            {
              "fields": {
                "mail": values.email,
                "timestamp": Date.now()
              }
            }
          ], function (err, records) {
            if (err) {
              console.error(err);
              resetForm()
              setStatus({
                sent: false,
                msg: `Error! Please try again later.`
              })
              return;
            }
            records.forEach(function (record) {
              console.log("new registration, airtable Id:" + record.getId());
              resetForm()
              setStatus({
                sent: true,
                msg: "Message has been sent! Thanks!"
              });
            });
          });
          setSubmitting(false);
          setTimeout(
            () => setStatus({
              sent: '',
              msg: ""
            }),
            3000
          );
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <br></br>
            <input
              class={styles.mailInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <br></br>
            {errors.email && touched.email && (
              <div className={styles.errorMail}>{errors.email}</div>
            )}
          </div>
          <br></br>
          <div>
            {status && status.msg && (
              <p
                className={`{styles.alert} ${status.sent ? styles.alertSuccess : styles.alertError
                  }`}
              >
                {status.msg}
              </p>
            )}
            <button class={styles.buttons} type="submit" disabled={isSubmitting}>
              Submit {isSubmitting && <span>Sending...</span>}
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;