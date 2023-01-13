import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency, rowColor }) => (
  <tr>
    <td className="rowColor">{type}</td>
    <td className="rowColor">{amount}</td>
    <td className="rowColor">{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type:PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
  rowColor:PropTypes.string.isRequired,
};

export default TransactionItem;