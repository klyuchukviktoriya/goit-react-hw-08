import { ErrorMessage, Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
    const nameId = useId();
    const phoneId = useId();

    const checkSchema = Yup.object({
        contactName: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, "Please enter only letters.")
            .required("Name is required.")
            .min(3, "Name is too short.")
            .max(50, "Name is too long."),
        contactPhone: Yup.string()
            .matches(/^\+?[0-9-]+$/, "Please enter a valid phone number.")
            .required("Phone number is required.")
            .min(6, "Phone number is too short.")
            .max(15, "Phone number is too long."),
    });

    const initialValues = {
        contactName: "",
        contactPhone: ""
    };

    const dispatch = useDispatch();

    const onSubmit = (values, options) => {
        const newItem = {
            name: values.contactName,
            number: values.contactPhone
        };

        dispatch(addContact(newItem));
        options.resetForm();
    };

    return (
        <Formik
            validationSchema={checkSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Form className={s.form}>
                <div className={s.wrapper}>
                    <label htmlFor={nameId}>Name</label>
                    <Field
                        className={s.input}
                        type="text"
                        name="contactName"
                        id={nameId}
                        placeholder="Enter name"
                    />
                    <ErrorMessage
                        className={s.errorMessage}
                        name="contactName"
                        component="span"
                    />
                    <label htmlFor={phoneId}>Number</label>
                    <Field
                        className={s.input}
                        type="text"
                        name="contactPhone"
                        id={phoneId}
                        placeholder="Enter phone number"
                    />
                    <ErrorMessage
                        className={s.errorMessage}
                        name="contactPhone"
                        component="span"
                    />
                </div>
                <button className={s.button} type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
}
