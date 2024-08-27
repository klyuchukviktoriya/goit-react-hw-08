import { useDispatch } from "react-redux"
import s from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice"

export default function SearchBox() {

    const dispatch = useDispatch()

    return (
        <div className={s.form}>
            <p className={s.text}>Find contacts by name</p>
            <input className={s.input} type="text" onChange={e => dispatch(changeFilter(e.target.value))}></input>
        </div>
    )
}