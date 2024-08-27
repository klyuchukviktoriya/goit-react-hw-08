import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsLoading, selectIsError } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

export default function App() {

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <h2 className={s.error}>Something went wrong!</h2>}
      <ContactList />
    </div>
  )
}
