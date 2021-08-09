import React from 'react';
import styles from './NavBar.module.css';
import Container from '../constainers/Container';
import logo from '../../assets/img/instagram-logo.png';
import {
  HeartIcon,
  HomeIcon,
  MessengerIcon,
  PlusIcon,
  CompassIcon,
  SearchIcon,
  CameraIcon,
} from '../icons';

import profilePic from '../../assets/img/profile-pic.jpg';
import SearchInput from '../SearchInput/SearchInput';
import { useMedia } from 'react-use';

export const NavMenu = () => {
  const isSmall = useMedia('(max-width: 620px)');

  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <HomeIcon />
      </div>

      {!isSmall ? (
        <div className={styles.menuItem}>
          <MessengerIcon />
        </div>
      ) : (
        <div className={styles.menuItem}>
          <SearchIcon />
        </div>
      )}

      <div className={styles.menuItem}>
        <PlusIcon />
      </div>
      <div className={styles.menuItem}>
        <CompassIcon />
      </div>
      <div className={styles.menuItem}>
        <HeartIcon />
      </div>
      <div className={styles.menuItem}>
        <div className={styles.profilePicWrapper}>
          <img
            src={profilePic}
            alt="User Profile"
            className={styles.profilePic}
          />
        </div>
      </div>
    </div>
  );
};

interface AuxProps {}

const NavBar: React.FC<AuxProps> = () => {
  const isSmall = useMedia('(max-width: 614px)');

  return (
    <>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.navWrapper}>
            {isSmall && (
              <div className={styles.newStory}>
                <div className={styles.newStoryIcon}>
                  <CameraIcon />
                </div>
              </div>
            )}

            <div className={styles.logo}>
              <img src={logo} alt="instagram logo" />
            </div>

            {!isSmall ? (
              <div className={styles.searchWrapper}>
                <SearchInput />
              </div>
            ) : null}

            {!isSmall ? (
              <NavMenu />
            ) : (
              <div className={styles.messenger}>
                <div className={styles.messengerIcon}>
                  <MessengerIcon />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
      <Container>
        {isSmall && (
          <div className={styles.bottomBar}>
            <NavMenu />
          </div>
        )}
      </Container>
    </>
  );
};

export default NavBar;
