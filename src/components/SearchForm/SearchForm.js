import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from "react-redux";
import { useState } from 'react';

const SearchForm = () => {

  const [searchData, setSearchData] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'SEARCH_CARDS', payload: searchData });
    // setSearchData('');
  }

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            placeholder="Search..."
            type="text"
            value={searchData}
            onChange={ (e) => setSearchData(e.target.value) }
          />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;
