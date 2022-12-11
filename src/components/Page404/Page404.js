import PageTitle from "../PageTitle/PageTitle";
import styles from "./Page404.module.scss";

const Page404 = () => {

  return (
    <div className={styles.hero}>
        <PageTitle>404</PageTitle>
        <p className={styles.subtitle}>
          We could't fine page with this address. Try picking something from the navigation
        </p>
      </div>
  )
}

export default Page404;