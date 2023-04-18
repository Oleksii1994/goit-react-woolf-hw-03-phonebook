import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';

export const Filter = ({ value, onFilter }) => (
  <LabelFilter>
    Find contacts by name
    <InputFilter
      type="text"
      placeholder="Enter name of contact"
      value={value}
      onChange={onFilter}
    ></InputFilter>
  </LabelFilter>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
