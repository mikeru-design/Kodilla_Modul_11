import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card} key={props.key}>{props.children}</li>
  );
}
export default Card;