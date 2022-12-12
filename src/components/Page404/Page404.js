import PageTitle from "../PageTitle/PageTitle";
import styles from "./Page404.module.scss";

const Page404 = () => {

  return (
    <div className={styles.hero}>
        <PageTitle>404 not found</PageTitle>
        <p className={styles.subtitle}>
          We couldn't find page with this address. Try picking something from the navigation bar
        </p>
      </div>
  )
}

export default Page404;