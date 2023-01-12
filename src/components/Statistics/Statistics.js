import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
        {title?<h2 className="title">{title}</h2>:null}
      <ul className="stat-list">
        <StatisticsList stats={stats} />
      </ul>
    </section>
    );
}

Statistics.propTypes = {
    title:PropTypes.string,
  };

export default Statistics;