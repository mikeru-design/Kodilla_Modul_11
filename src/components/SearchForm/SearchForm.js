import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { getSearchData, searchCards } from '../../redux/searchCardsRedux';

const SearchForm = () => {

  const initialSearchData = useSelector( getSearchData )

  const [searchData, setSearchData] = useState(initialSearchData)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( searchCards(searchData) );
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
