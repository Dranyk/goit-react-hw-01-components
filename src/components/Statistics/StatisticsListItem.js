import getRandomHexColor from '../getRandomHexColor';
import PropTypes from 'prop-types';
import css from "./StatisticsListItem.module.css";

function StatisticsListItem({ stats }) {
    return stats.map(({ id, label, percentage }) => {
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

StatisticsListItem.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ),
};

export default StatisticsListItem;