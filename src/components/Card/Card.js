import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const isFavoriteFunc = () => {
    const payload = props.id;
    dispatch(addToFavorite(payload));
  };

  const removeCardFunc = () => {
    const payload = props.id;
    dispatch(removeCard(payload));
  };

  return (
    <li className={styles.card}>
      {props.children}
      <i
      className={clsx(styles.fa, styles.faStar, 'fa', 'fa-star', (props.isFavorite === true) ? styles.isFavorite  : undefined)}
      onClick={isFavoriteFunc}>
      </i>
      <i
      className={clsx(styles.fa, styles.faTrash, 'fa', 'fa-trash')}
      onClick={removeCardFunc}>
      </i>
    </li>
  );
}
export default Card;