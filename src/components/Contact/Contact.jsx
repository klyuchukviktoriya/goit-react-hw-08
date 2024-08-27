import s from "./Contact.module.css"
import { BiUser, BiPhone } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ id }) {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const contact = contacts.find(contact => contact.id === id);

    return (
        <div className={s.wrapper}>
            <div className={s.contact}>
                <p className={s.text}><BiUser className={s.icon} />{contact.name}</p>
                <p className={s.text}><BiPhone className={s.icon} />{contact.number}</p>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );
}
