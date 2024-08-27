import { useDispatch} from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();


    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome back!!! Освежившийся пользователь....</p>
            <button type="button" onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    );
}

