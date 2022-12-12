import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';

const ListForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({id:uuid(), title, description}));
    setTitle('');
    setDescription('');
  }

  return(
    <form
      onSubmit={handelSubmit}
      className={styles.listForm}>
        <TextInput
          placeholder='List title'
          value={title}
          type='text'
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          placeholder='List description'
          value={description}
          type='text'
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Add List</Button>
    </form>
  )
}

export default ListForm;