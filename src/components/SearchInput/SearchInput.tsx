import React, { useRef } from 'react';
import { useState } from 'react';
import { CloseRoundedIcon, SearchIcon } from '../icons';
import { Title1 } from '../Typography/Typography';
import styles from './SearchInput.module.css';
import { useClickAway } from 'react-use';

export interface ISearchInputProps {}

const SearchInput: React.FC<ISearchInputProps> = props => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState<String>();
  const [inputClass, setInputClass] = useState([styles.searchInput]);
  let inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocus(true);
    setInputClass([styles.searchInput]);
  };

  useClickAway(inputRef, () => {
    setFocus(false);

    if (value && value !== '') {
      setInputClass([styles.searchInput, styles.isTransparent]);
    }
  });

  const handlePlaceholderClick = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    console.log('hit');
    setValue('');
    inputRef.current?.focus();
    setFocus(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        {!focus && (
          <div
            className={styles.placeholderWrapper}
            onClick={handlePlaceholderClick}
          >
            <div className={styles.searchIconWrapper}>
              <SearchIcon className={styles.searchIcon} default></SearchIcon>
            </div>
            <div className={styles.placeholder}>
              {!value || value === '' ? 'Search' : value}
            </div>
          </div>
        )}

        <input
          type="text"
          className={inputClass.join(' ')}
          onFocus={handleFocus}
          onInput={e => setValue((e.target as HTMLInputElement).value)}
          placeholder={focus ? 'Search' : ''}
          ref={inputRef}
        />

        {focus && (
          <div className={styles.clearIconWrapper} onClick={handleClear}>
            <CloseRoundedIcon className={styles.clearIcon} />
          </div>
        )}
      </div>

      {focus ? (
        <div className={styles.searchModal}>
          <div className={styles.arrowUp}></div>

          <div className={styles.content}>
            <Title1>Recent</Title1>
            <div className={styles.modalBody}>
              <div className={styles.modalMessage}>No recent searches.</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
