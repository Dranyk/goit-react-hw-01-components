import PropTypes from 'prop-types';
import css from "./StatisticsList.module.css";
import StatisticsListItem from './StatisticsListItem';

const StatisticsList = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        <StatisticsListItem stats={stats} />
      </ul>
    </section>
    );
}

StatisticsList.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
      ),
};

export default StatisticsList;