import styles from "./CardForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cardsRedux";

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { columnId: props.columnId, title };
    dispatch(addCard(payload));
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Add card"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;
