import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = props => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((transaction, index) => (
          <TransactionHistoryItem
            key={transaction.id}
            {...transaction}
            rowColor={index % 2 ? 'light' : 'dark'}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  props: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
  }),
};
export default TransactionHistory;
