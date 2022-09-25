import PropTypes from 'prop-types';
const Filter = ({ addFilter }) => {
  // console.log(filterContact);
  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={e => {
            addFilter(e);
          }}
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
