import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/ContactList/ContactList";
import { getContacts } from "../redux/contacts/operations";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";




export default function ContactsPage() {

    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        // <div className={s.container}>
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && <Loader />}
            {/* {error && <h2 className={s.error}>Something went wrong!</h2>} */}
            {error && <h2>Something went wrong!</h2>}
            <ContactList />
        </div>
    )
}