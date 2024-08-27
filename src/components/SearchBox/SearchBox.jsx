import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={s.form}>
            <p className={s.text}>Find contacts by name</p>
            <input
                className={s.input}
                type="text"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
                placeholder="Enter name..."
            />
        </div>
    );
}
