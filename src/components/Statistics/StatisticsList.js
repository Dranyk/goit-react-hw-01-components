import getRandomHexColor from '../getRandomHexColor';
import PropTypes from 'prop-types';

function StatisticsList({ stats = [] }) {
    return [...stats].map(({ id, label, percentage }) => {
        const randomColor = getRandomHexColor();
        return (
          <li
            className="item"
            key={id}
            style={{ backgroundColor: randomColor }}
          >
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
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