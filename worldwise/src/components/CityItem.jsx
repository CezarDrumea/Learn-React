import { formatDate } from '../utilities/format';
import styles from './CityItem.module.css';

const CityItem = ({ emoji, cityName, date }) => {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};
export default CityItem;
