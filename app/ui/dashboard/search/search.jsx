import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeHolder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeHolder} className={styles.input} />
    </div>
  )
}

export default Search;