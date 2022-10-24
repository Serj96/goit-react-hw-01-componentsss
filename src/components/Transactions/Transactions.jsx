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
    {items.map((item) => (
        <TransactionItems key={item.id} item={item}/>
    ))}
 </tbody>
</table>
}

Transactions.prototype = {
    id: PropTypes.number.isRequired,
}