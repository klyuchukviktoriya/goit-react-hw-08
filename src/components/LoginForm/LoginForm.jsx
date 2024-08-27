import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
});

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(login(values))
            .unwrap()
            .then(() => {
                console.log("login success");
            })
            .catch(() => {
                console.log("login error");
            });

        resetForm();
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form} autoComplete="off">
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
                <button className={s.button} type="submit">Log In</button>
            </Form>
        </Formik>
    );
}
