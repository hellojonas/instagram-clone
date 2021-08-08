import React from 'react';
import styles from './Story.module.css';
import storyImage5 from '../../assets/img/story/story-5.jpg';
import storyImage3 from '../../assets/img/story/story-3.jpg';
import storyImage8 from '../../assets/img/story/story-8.jpg';
import storyImage6 from '../../assets/img/story/story-6.jpg';
import storyImage7 from '../../assets/img/story/story-7.jpg';
import storyImage2 from '../../assets/img/story/story-2.jpg';
import storyImage1 from '../../assets/img/story/story-1.jpg';
import storyImage4 from '../../assets/img/story/story-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export interface IStoryItemProps {
  user: string;
  image: any;
}

export const StoryItem: React.FC<IStoryItemProps> = props => {
  return (
    <div className={styles.storyWrapper}>
      <div className={styles.outline}>
        <div className={styles.tinLIne}>
          <div className={styles.imageWrapper}>
            <img src={props.image} alt="" className={styles.image} />
          </div>
        </div>
      </div>
      <div className={styles.user}>{props.user}</div>
    </div>
  );
};

export interface IStoryProps {}

const Story: React.FC<IStoryProps> = props => {
  const stories = [
    {
      id: 1,
      username: 'salesio_do_panico',
      image: storyImage5,
    },
    {
      id: 2,
      username: 'daygoboyjurus',
      image: storyImage3,
    },
    {
      id: 3,
      username: 'kamanekamas',
      image: storyImage8,
    },
    {
      id: 4,
      username: 'twentyfingeroficial',
      image: storyImage6,
    },
    {
      id: 5,
      username: 'diva_negra',
      image: storyImage7,
    },
    {
      id: 6,
      username: 'ui_gradient',
      image: storyImage2,
    },
    {
      id: 7,
      username: 'milena_milly',
      image: storyImage1,
    },
    {
      id: 8,
      username: 'brad_design',
      image: storyImage4,
    },
  ];

  const storiesView = stories?.map(story => (
    <SwiperSlide>
      <StoryItem
        user={story.username}
        image={story.image}
        key={story.id}
      ></StoryItem>
    </SwiperSlide>
  ));

  return (
    <div className={styles.stories}>
      <Swiper spaceBetween={0} slidesPerView={7} freeMode={true}>
        {storiesView}
      </Swiper>
    </div>
  );
};

export default Story;
