import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {

  const cards = useSelector(getFavoriteCards);

  return (
    <div className={styles.hero}>
        <PageTitle>Favorite</PageTitle>

        <article className={styles.column}>
          <h3 className={styles.title}> <span className={`${styles.icon} fa fa-star`}></span>Favorite</h3>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite}>{card.title}</Card>)}
          </ul>
        </article>

    </div>
  )
}

export default Favorite;