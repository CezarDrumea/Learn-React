import { Link } from 'react-router-dom';
import { formatDate } from '../../utilities/format';
import styles from './CityItem.module.css';

const CityItem = ({ emoji, cityName, date, id, position: { lat, lng } }) => {
  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
export default CityItem;
