
import PropTypes from 'prop-types';

export const TransactionItems = ({item}) => {
    return <tr>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>
}

TransactionItems.prototype = {
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}
