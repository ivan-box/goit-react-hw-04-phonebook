import PropTypes from 'prop-types';
const Filter = ({ addFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={addFilter}
          type="text"
          name="filter"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          required
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  addFilter: PropTypes.func.isRequired,
};
export default Filter;
