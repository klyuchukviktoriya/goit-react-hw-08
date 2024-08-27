import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./RegistrationForm.module.css";


const validationSchema = yup.object().shape({
    name: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={s.form} autoComplete="off">
                    <label className={s.label}>
                        Username
                        <Field className={s.input} type="text" name="name" />
                        <ErrorMessage className={s.errorMessage} name="name" component="div" />
                    </label>
                    <label className={s.label}>
                        Email
                        <Field className={s.input} type="email" name="email" />
                        <ErrorMessage className={s.errorMessage} name="email" component="div" />
                    </label>
                    <label className={s.label}>
                        Password
                        <Field className={s.input} type="password" name="password" />
                        <ErrorMessage className={s.errorMessage} name="password" component="div" />
                    </label>
                    <button className={s.button} type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
}
