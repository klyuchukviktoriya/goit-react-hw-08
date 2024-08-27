import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Пользователь освежается......</h2>
  ) : (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                 </RestrictedRoute>
              }
            />
            <Route
              path="register"
              element={
              <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
               </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
