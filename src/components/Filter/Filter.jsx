import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'redux/filter/slice.filter';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  const filterContact = event => {
    const { value } = event.currentTarget;
    dispatch(filterContactAction(value));
  };
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <br />
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={filterContact}
      />
    </label>
  );
};
