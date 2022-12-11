import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {

  return (
    <div className={styles.hero}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet cupiditate similique!
        </p>
      </div>
  )
}

export default Favorite;