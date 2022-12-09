import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import uuid from 'react-uuid';

const ColumnForm = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { id: uuid(), title, icon } });
    setTitle('');
    setIcon('');
 };


  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Icon..."
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
