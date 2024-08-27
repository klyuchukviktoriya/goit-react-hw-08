import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={s.list}>
            {filteredContacts.length ? (
                filteredContacts.map(({ id }) => (
                    <li key={id}>
                        <Contact id={id} />
                    </li>
                ))
            ) : (
                <h2 className={s.error}>No data received...</h2>
            )}
        </ul>
    );
}



