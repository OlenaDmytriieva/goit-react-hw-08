import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectTextFilter } from '../../redux/filters/selectors';
import style from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectTextFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value)),
    200
  );

  return (
    <div>
      <p className={style.label}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}

