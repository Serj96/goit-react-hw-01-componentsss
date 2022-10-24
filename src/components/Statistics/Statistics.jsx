import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {StatisticsItem} from './StatList/StatisticsItem'
 
export const  Statistics = ({text, stats}) => {
    return <section className={css.statistics}>
    <h2 className={css.title}>{text}</h2>
    <ul className={css.list}>
        
    {stats.map(stat => (
        <StatisticsItem key={stat.id} stat={stat}/> 
    ))}
    
    </ul>
  </section>
}

Statistics.propTypes = {
    text: PropTypes.string.isRequired
}