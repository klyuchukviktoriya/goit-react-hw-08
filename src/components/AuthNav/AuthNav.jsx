

import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
    return (
        <div className={s.linkwrapper}>
            <NavLink className={s.link} to="/register">
                Register
            </NavLink>
            <NavLink className={s.link} to="/login">
                Log In
            </NavLink>
        </div>
    );
}
