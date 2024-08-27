import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

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
            <Form className={css.form} autoComplete="off">
                <label className={css.label}>
                    Email
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" className={css.error} />
                </label>
                <label className={css.label}>
                    Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" className={css.error} />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}
