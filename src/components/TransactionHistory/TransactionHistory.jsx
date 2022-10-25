import PropTypes from 'prop-types';
import css from './Transactions.module.css'
import {TransactionItems} from './TransactionItems/TransactionItems'

export const Transactions = ({items}) => {
 return <table className={css.transaction}>
 <thead>
   <tr>
     <th>Type</th>
     <th>Amount</th>
     <th>Currency</th>
   </tr>
 </thead>
 <tbody>
    {items.map(({id, type, amount, currency}) => (
        <TransactionItems key={id} type={type} amount={amount} currency={currency} />
    ))}
 </tbody>
</table>
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired, 
        amount: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
}