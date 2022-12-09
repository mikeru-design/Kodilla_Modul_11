import styles from './CardForm.module.scss'
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import uuid from 'react-uuid';


const CardForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_CARD', payload: { id: uuid().slice(0,8), columnId: props.columnId, title }});
    setTitle('');
  }

  return(
    <form  className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Add card'
        type='text'
        value={title}
        onChange={ (e) => setTitle(e.target.value)}/>
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;