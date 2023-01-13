import PropTypes from 'prop-types';
import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr className={css.tr}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type:PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
};

export default TransactionHistoryItem;