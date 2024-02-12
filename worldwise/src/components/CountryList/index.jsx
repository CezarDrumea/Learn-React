import Spinner from '../Spinner';
import styles from './CountryList.module.css';
import Message from '../Message';
import CountryItem from '../CountryItem';

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  const countries = [
    ...new Map(
      cities.map((city) => [
        city.country,
        { country: city.country, emoji: city.emoji, id: city.id },
      ])
    ).values(),
  ];
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem {...country} key={country.id} />
      ))}
    </ul>
  );
};
export default CountryList;
