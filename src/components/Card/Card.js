import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const isFavoriteFunc = () => {
    const payload = props.id;
    dispatch(addToFavorite(payload));
  }

  return (
    <li className={styles.card}>
      {props.children}
      <i
      className={clsx(styles.fa, 'fa', 'fa-star', (props.isFavorite === true) ? styles.isFavorite  : undefined)}
      onClick={isFavoriteFunc}>
      </i>
    </li>
  );
}
export default Card;