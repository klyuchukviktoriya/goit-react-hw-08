import { ErrorMessage, Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


export default function ContactForm() {

    const nameId = useId();
    const phoneId = useId();

    const checkSchema = Yup.object({
        contactName: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, "Hey, it's not a password, only letters ))")
            .required("Type something")
            .min(3, "Too short")
            .max(50, "Amen!"),
        contactPhone: Yup.string()
            .matches(/^\+?[0-9-]+$/, "It's not a phone number ))")
            .required("Are you serious?")
            .min(6, "Is this an emergency call?")
            .max(15, "It's tooooo loooooong"),

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
    }

    return (
        <Formik validationSchema={checkSchema} initialValues={initialValues} onSubmit={onSubmit}>
            <Form className={s.form}>
                <div className={s.wrapper}>
                    <label htmlFor={nameId}>Name</label>
                    <Field className={s.input} type="text" name="contactName" id={nameId}></Field>
                    <ErrorMessage className={s.errorMessage} name="contactName" component="span" />
                    <label htmlFor={phoneId}>Number</label>
                    <Field className={s.input} type="tel" name="contactPhone" id={phoneId}></Field>
                    <ErrorMessage className={s.errorMessage} name="contactPhone" component="span" />
                </div>
                <button className={s.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}