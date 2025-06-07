import style from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter more than 3 characters, please")
    .max(50, "Enter less than 50 characters, please")
    .required("Required"),
  number: Yup.string()
    .min(3, "Enter more than 3 characters, please")
    .max(50, "Enter less than 50 characters, please")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <div className={style.labelAndField}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.field} id={nameId} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={style.error} />
        </div>
        <div className={style.labelAndField}>
          <label htmlFor={numberId}>Number</label>
          <Field className={style.field} id={numberId} type="tel" name="number" />
          <ErrorMessage name="number" component="div" className={style.error} />
        </div>
        <button className={style.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;