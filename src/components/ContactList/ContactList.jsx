import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { nanoid } from 'nanoid';

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={s.list}>
            {filteredContacts.length > 0 ? (
                filteredContacts.map(({ id }) => (
                    <li key={nanoid()}>
                        <Contact id={id} />
                    </li>
                ))
            ) : (
                <h2 className={s.error}>No contacts available...</h2>
            )}
        </ul>
    );
}
