import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    console.log('Is Logged In:', isLoggedIn);

    const classLink = ({ isActive }) => clsx(s.link, isActive && s.active);

    return (
        <nav className={s.linkwrapper}>
            <NavLink className={classLink} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={classLink} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}

