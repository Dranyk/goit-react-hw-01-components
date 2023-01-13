import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import StatisticsList from './StatisticsList';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title?<h2 className={css.title}>{title}</h2>:null}
      <ul className={css.statList}>
        <StatisticsList stats={stats} />
      </ul>
    </section>
    );
}

Statistics.propTypes = {
    title:PropTypes.string,
  };

export default Statistics;