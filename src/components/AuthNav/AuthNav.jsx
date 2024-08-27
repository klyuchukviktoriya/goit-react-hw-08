

import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {

    
    const classLink = ({ isActive }) => clsx(s.link, isActive && s.active);

    return (
        <div className={s.linkwrapper}>
            <NavLink className={classLink} to="/register">
                Register
            </NavLink>
            <NavLink className={classLink} to="/login">
                Log In
            </NavLink>
        </div>
    );
}
