import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {StatisticsItem} from './StatList/StatisticsItem'
 
export const  Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    <h2 className={`title ${title ? css.title : css.is_hidden}`}>{title}</h2>
    <ul className={css.list}>
        
    {stats.map(({id, label, percentage}) => (
        <StatisticsItem key={id} label={label} percentage={percentage}/> 
    ))}
    
    </ul>
  </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired, 
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
    })
    ).isRequired
}