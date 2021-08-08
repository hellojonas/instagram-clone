import React from 'react';
import Story from '../../components/Story/Story';
import styles from './Home.module.css';
import { useMedia } from 'react-use';

const Home = () => {
  const isLarge = useMedia('(min-width: 976px)');
  return (
    <div>
      <main className={styles.home}>
        <section className={styles.feed}>
          <Story />
        </section>

        {isLarge && <aside className={styles.aside}></aside>}
      </main>
    </div>
  );
};

export default Home;
