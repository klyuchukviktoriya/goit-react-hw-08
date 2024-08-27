import { useDispatch} from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();


    return (
        <div className={s.wrapper}>
            <p className={s.text}>Somebody kill me, please<br/>{`OST "The Wedding Singer"`}</p>
            <button className={s.button} type="button" onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    );
}

