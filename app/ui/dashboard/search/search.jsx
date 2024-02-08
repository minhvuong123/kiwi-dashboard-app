'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './search.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeHolder }) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1)

    if (e.target.value) {
      params.set("q", e.target.value)
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeHolder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search;