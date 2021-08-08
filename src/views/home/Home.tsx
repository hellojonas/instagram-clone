import React from 'react';
import Story from '../../components/Story/Story';
import styles from './Home.module.css';
import { useMedia } from 'react-use';
import AccountSwitch from '../../components/AccountSwitch/AccountSwitch';
import accountPic from '../../assets/img/profile-pic.jpg';
import { TextButton } from '../../components/Button/Buttons';
import Suggestion from '../../components/Suggestion/Suggestion';

import suggestion1 from '../../assets/img/suggetions/suggestion-1.png';
import suggestion2 from '../../assets/img/suggetions/suggestion-2.jpg';
import suggestion3 from '../../assets/img/suggetions/suggestion-3.jpg';
import suggestion4 from '../../assets/img/suggetions/suggestion-4.jpg';
import suggestion5 from '../../assets/img/suggetions/suggestion-5.jpg';

const Home = () => {
  const suggestions = [
    {
      id: 1,
      username: 'instagram',
      note: 'Instagram Official Account',
      image: suggestion1,
    },
    {
      id: 2,
      username: 'celsoPortiolli',
      note: 'Instagram Recommended',
      image: suggestion2,
    },
    {
      id: 3,
      username: 'nike',
      note: 'Instagram Recommended',
      image: suggestion3,
    },
    {
      id: 4,
      username: 'andrearussett',
      note: 'Instagram Recommended',
      image: suggestion4,
    },
    {
      id: 5,
      username: 'ronaldo',
      note: 'Instagram Recommended',
      image: suggestion5,
    },
  ].map((s, idx) => (
    <Suggestion
      username={s.username}
      note={s.note}
      image={s.image}
      outline={idx % 2 !== 0}
      key={s.id}
    />
  ));

  const isLarge = useMedia('(min-width: 976px)');

  return (
    <div>
      <main className={styles.home}>
        <section className={styles.feed}>
          <Story />
        </section>

        {isLarge && (
          <aside className={styles.aside}>
            <div className={styles.asideContent}>
              <div className={styles.accountSwitch}>
                <AccountSwitch
                  name="Hello Jonas"
                  userName="hellojonashp"
                  image={accountPic}
                />
              </div>

              <div className={styles.suggestions}>
                <div className={styles.suggestionHeader}>
                  <span className={styles.suggestionTitle}>
                    Suggestions For You
                  </span>
                  <div className={styles.suggestionButtonAll}>
                    <TextButton>
                      <span className={styles.suggestionButton}>See All</span>
                    </TextButton>
                  </div>
                </div>

                <div className={styles.suggestionsList}>{suggestions}</div>
              </div>
            </div>

            <footer className={styles.footer}>
              <ul className={styles.linkList}>
                <div className={styles.listRow}>
                  <li className={styles.linkItem}>About</li>
                  <li className={styles.linkItem}>Help</li>
                  <li className={styles.linkItem}>Press</li>
                  <li className={styles.linkItem}>API</li>
                  <li className={styles.linkItem}>Jobs</li>
                  <li className={styles.linkItem}>Privacy</li>
                  <li className={styles.linkItem}>Terms</li>
                </div>
                <div className={styles.listRow}>
                  <li className={styles.linkItem}>Locations</li>
                  <li className={styles.linkItem}>Top</li>
                  <li className={styles.linkItem}>Accounts</li>
                  <li className={styles.linkItem}>Hashtags</li>
                  <li className={styles.linkItem}>Language</li>
                </div>
              </ul>

              <div className={styles.copyright}>
                &copy; 2021 Instagram from Facebook
              </div>
            </footer>
          </aside>
        )}
      </main>
    </div>
  );
};

export default Home;
