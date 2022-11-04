// import PropTypes from 'prop-types';
import { filterContactAction } from 'redux/filter/action.filter';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);
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

// Filter.propTypes = {
//   handleFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
