import PageTitle from "../PageTitle/PageTitle";
import styles from "./About.module.scss";

const About = () => {

  return (
    <div className={styles.hero}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet cupiditate similique!
        </p>
      </div>
  )
}

export default About;