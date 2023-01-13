import getRandomHexColor from '../getRandomHexColor';
import PropTypes from 'prop-types';
import css from "./StatisticsList.module.css";

function StatisticsList({ stats = [] }) {
    return [...stats].map(({ id, label, percentage }) => {
        const randomColor = getRandomHexColor();
        return (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: randomColor }}
          >
            <span className={css.label}>{label} </span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      });
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ),
};

export default StatisticsList;